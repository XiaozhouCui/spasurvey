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

Instructions:
  '--- Start of page Instructions ---
  Instructions.LayoutTemplate = "Instructions.html"
  Instructions.Ask()
  '--- End of page Instructions ---

Definitions:
  '--- Start of page Definitions ---
  Definitions.LayoutTemplate = "Definitions.html"
  Definitions.Ask()
  '--- End of page Definitions ---

Script:
  '--- Start of IOM Script item Script ---
  IOM.Info.EstimatedPages = IOM.Pages.Count - 3
  IOM.Info.EstimatedProgress = 1
Sub OnAfterQuestionAsk(Question, IOM)
  IOM.Info.EstimatedProgress = IOM.Info.EstimatedProgress + 1
End Sub
  '--- End of IOM Script item Script ---

Engagement:
  '--- Start of page Engagement ---
  Engagement.LayoutTemplate = "Engagement.html"
  Engagement.Ask()
  '--- End of page Engagement ---

TrulyGreatPlaceToWork:
  '--- Start of page TrulyGreatPlaceToWork ---
  TrulyGreatPlaceToWork.LayoutTemplate = "TrulyGreatPlaceToWork.html"
  TrulyGreatPlaceToWork.Ask()
  '--- End of page TrulyGreatPlaceToWork ---

Expectations:
  '--- Start of page Expectations ---
  Expectations.LayoutTemplate = "Expectations.html"
  Expectations.Ask()
  '--- End of page Expectations ---

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

PersonalWellBeing:
  '--- Start of page PersonalWellBeing ---
  PersonalWellBeing.LayoutTemplate = "PersonalWellBeing.html"
  PersonalWellBeing.Ask()
  '--- End of page PersonalWellBeing ---

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