# Flux

In the project i have a file with the JSON structure that i am working on. Right now i just have a simple nodejs server returning this JSON upon request.
https://github.com/MonkeyJumps/SimpleNodeJsServer

Document 
   DocumentName
   ImagePath
   Pages[
     {
        PageName
        DocumentName
      }
    ]
   Records[
     {
        RecordNumber
        Fields: [
        {
            Name:
            Type:
            Value:
        }
     }
   ]
   
   When working with my document state located in the store. Should i just pass the document as props to each component then get the Pages and update it through the document? 
   
   I was thinking of reducing the data but that is where i get stuck.
   
   I can not normalize the data. At least not now.
