BeginPackage["Notebook`DocsArchive`", {
    "JerryI`Notebook`AppExtensions`",
    "KirillBelov`CSockets`",
    "KirillBelov`Internal`",
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

SocketListen[CSocketOpen[AppExtensions`FrontendEnv["host"], 20540], dcp@#&]

EventHandler[AppExtensions`AppEvents// EventClone, {
    "open_docs" -> Function[Null,
        UsingFrontEnd[SystemOpen["http://" <> AppExtensions`FrontendEnv["host"] <> ":20540"] ]
    ]
}];

End[]
EndPackage[]
