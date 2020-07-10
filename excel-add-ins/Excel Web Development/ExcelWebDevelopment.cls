'User Form
Public WD As WD
Public WDPageNo, WDNavBarHeadingNo, WDNavBarLinkNo, WDChartNo, WDTextNo, WDMeasureNo, WDiFrameNo, WDImageNo, WDTableNo As Integer


Private Sub UserForm_Initialize()
    Set WD = New WD
    WDPageNo = 1
    WDNavBarHeadingNo = 1
    WDNavBarLinkNo = 1
    WDChartNo = 1
    WDTextNo = 1
    WDMeasureNo = 1
    WDiFrameNo = 1
    WDImageNo = 1
    WDTableNo = 1
End Sub
