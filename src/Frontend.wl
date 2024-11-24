BeginPackage["Notebook`DocsArchive`", {
    "JerryI`Notebook`AppExtensions`",
    "JerryI`Misc`Events`",
    "KirillBelov`Internal`",
    "JerryI`WLX`WebUI`", 
    "KirillBelov`TCPServer`",
    "KirillBelov`HTTPHandler`",
    "KirillBelov`HTTPHandler`Extensions`"
}];

Begin["`Internal`"]

Print["Starting HTTP server for docs..."];

root = DirectoryName[$InputFileName] // ParentDirectory;

dcp = TCPServer[];
dcp["CompleteHandler", "HTTP"] = HTTPPacketQ -> HTTPPacketLength;
dcp["MessageHandler", "HTTP"]  = HTTPPacketQ -> dhttp;

dhttp = HTTPHandler[];
dhttp["MessageHandler", "Index"]  = AssocMatchQ[<|"Path" -> "/"|>] -> (ImportFile["index.html", "Base"->FileNameJoin[{root, "docs"}] ] &)
dhttp["MessageHandler", "All"]  = AssocMatchQ[<|"Method" -> "GET"|>]  -> (
  ImportFile[If[StringPart[#["Path"], -3] === "." || StringPart[#["Path"], -4] === "." || StringPart[#["Path"], -5] === ".", #, Join[#, <|"Path" -> StringJoin[#["Path"], "/index.html"]|>] ], "Base"->{FileNameJoin[{root, "docs"}], FileNameJoin[{Directory[], "wljs_packages"}]} ] &
)

AppExtensions`WebServers["Docs"] = <|"Host"->AppExtensions`FrontendEnv["host"], "Port"->20540, "Handler"->(dcp@#&)|>


AppExtensions`TemplateInjection["AppScripts"] = ("
    <script type=\"module\">
        core['Notebook`DocsArchive`Internal`OpenDocs'] = (args, env) => {
            const addr = interpretate(args[0], env);
            if (window.electronAPI) {
                window.electronAPI.openExternal(addr);
            } else {
                const lnk = document.createElement('a');
                lnk.href = addr;
                lnk.target = '_blank';
                lnk.click();
            }
        }
    </script>
")&;

EventHandler[AppExtensions`AppEvents// EventClone, {
    "open_docs" -> Function[Null,
        With[{cli = Global`$Client},
            WebUISubmit[OpenDocs["http://" <> AppExtensions`FrontendEnv["host"] <> ":20540"], cli];
        ]
    ]
}];

End[]
EndPackage[]
