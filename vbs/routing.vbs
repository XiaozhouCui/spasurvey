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

AttractionRetention:
  '--- Start of page AttractionRetention ---
  AttractionRetention.LayoutTemplate = "AttractionRetention.html"
  AttractionRetention.Ask()
  '--- End of page AttractionRetention ---

DrivingTheFuture:
  '--- Start of page DrivingTheFuture ---
  DrivingTheFuture.LayoutTemplate = "DrivingTheFuture.html"
  DrivingTheFuture.Ask()
  '--- End of page DrivingTheFuture ---

ValuesInAction:
  '--- Start of page ValuesInAction ---
  ValuesInAction.LayoutTemplate = "ValuesInAction.html"
  ValuesInAction.Ask()
  '--- End of page ValuesInAction ---

LeadershipEssentials:
  '--- Start of page LeadershipEssentials ---
  LeadershipEssentials.LayoutTemplate = "LeadershipEssentials.html"
  LeadershipEssentials.Ask()
  '--- End of page LeadershipEssentials ---

LeadershipBehaviours:
  '--- Start of page LeadershipBehaviours ---
  LeadershipBehaviours.LayoutTemplate = "LeadershipBehaviours.html"
  LeadershipBehaviours.Ask()
  '--- End of page LeadershipBehaviours ---

TheIssuesThatMatter:
  '--- Start of page TheIssuesThatMatter ---
  TheIssuesThatMatter.LayoutTemplate = "TheIssuesThatMatter.html"
  TheIssuesThatMatter.Ask()
  '--- End of page TheIssuesThatMatter ---

ChangeMomentum:
  '--- Start of page ChangeMomentum ---
  ChangeMomentum.LayoutTemplate = "ChangeMomentum.html"
  ChangeMomentum.Ask()
  '--- End of page ChangeMomentum ---

CommunityExpectations:
  '--- Start of page CommunityExpectations ---
  CommunityExpectations.LayoutTemplate = "CommunityExpectations.html"
  CommunityExpectations.Ask()
  '--- End of page CommunityExpectations ---

MessageinaBottle:
  '--- Start of page MessageinaBottle ---
  MessageinaBottle.LayoutTemplate = "MessageinaBottle.html"
  MessageinaBottle.Ask()
  '--- End of page MessageinaBottle ---

FeedbackFromtheLastSurvey:
  '--- Start of page FeedbackFromtheLastSurvey ---
  FeedbackFromtheLastSurvey.LayoutTemplate = "FeedbackFromtheLastSurvey.html"
  FeedbackFromtheLastSurvey.Ask()
  '--- End of page FeedbackFromtheLastSurvey ---

StatisticalGroupings:
  '--- Start of page StatisticalGroupings ---
  StatisticalGroupings.LayoutTemplate = "StatisticalGroupings.html"
  StatisticalGroupings.Ask()
  '--- End of page StatisticalGroupings ---

AcknowledgementOfDiversity:
  '--- Start of page AcknowledgementOfDiversity ---
  AcknowledgementOfDiversity.LayoutTemplate = "AcknowledgementOfDiversity.html"
  AcknowledgementOfDiversity.Ask()
  '--- End of page AcknowledgementOfDiversity ---

ThankYouForCompletingTheSurvey:
  '--- Start of page ThankYouForCompletingTheSurvey ---
  ThankYouForCompletingTheSurvey.LayoutTemplate = "ThankYouForCompletingTheSurvey.html"
  ThankYouForCompletingTheSurvey.Ask()
  '--- End of page ThankYouForCompletingTheSurvey ---

End Routing