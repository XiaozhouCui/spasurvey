Routing(Web, InterviewModes = Web)
  IOM.LayoutTemplate = "DefaultLayout.html"

Variables:
  '--- Start of IOM Script item Variables ---
  IOM.OffPathDataMode = OffPathDataModes.dmKeep
  IOM.MustAnswer = False
  IOM.DefaultStyles.Default.Orientation = Orientations.orRow
  Dim WorkUnit
  WorkUnit = IOM.SampleRecord.Item["WorkUnit"]
  '--- End of IOM Script item Variables ---

Coverpage:
  '--- Start of page Coverpage ---
  Coverpage.LayoutTemplate = "Coverpage.html"
  Coverpage.Ask()
  '--- End of page Coverpage ---

Script:
  '--- Start of IOM Script item Script ---
  IOM.Info.EstimatedPages = IOM.Pages.Count - 1
  IOM.Info.EstimatedProgress = 1
Sub OnAfterQuestionAsk(Question, IOM)
  IOM.Info.EstimatedProgress = IOM.Info.EstimatedProgress + 1
End Sub
  '--- End of IOM Script item Script ---

Survey:
  '--- Start of page Survey ---
  Survey.LayoutTemplate = "Survey.html"
  Survey.Ask()
  '--- End of page Survey ---

End Routing