Sub ListBox()
Dim strng As Range
Set strng = Range("A2")
Dim listboxname As String
listboxname = InputBox("Listbox Name")
For i = 0 To 50
    For j = 0 To 20
        strng.Offset(j, 0).Value = "me." & listboxname & ".addItem  " & "r" & i & "-c" & j
    Next j
    Set strng = strng.Offset(21, 0)
Next i
End Sub
