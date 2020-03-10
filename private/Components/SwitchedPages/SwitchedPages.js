import React from 'react'; // required in order to use JSX

import CoverPage from "../CoverPage/CoverPage";
import Definitions from "../Definitions/Definitions";
import Instructions from "../Instructions/Instructions";
import Engagement from '../Engagement/Engagement';
import Expectations from "../Expectations/Expectations";
import PersonalWellBeing from "../PersonalWellBeing/PersonalWellBeing";
import WorkLifeIntegration from "../WorkLifeIntegration/WorkLifeIntegration";
import TrulyGreatPlaceToWork from '../TrulyGreatPlaceToWork/TrulyGreatPlaceToWork';
import NPS from '../NPS/NPS';
import AttractionRetention from "../AttractionRetention/AttractionRetention";
import InclusionWork from "../InclusionWork/InclusionWork";
import DrivingTheFuture from "../DrivingTheFuture/DrivingTheFuture";
import StrategicDirection from "../StrategicDirection/StrategicDirection";
import StrategicDirectionIAM from "../StrategicDirectionIAM/StrategicDirectionIAM";
import StatisticalGroupings from "../StatisticalGroupings/StatisticalGroupings";
import AcknowledgementOfDiversity from "../AcknowledgementOfDiversity/AcknowledgementOfDiversity";
import StandardsOfBehaviour from "../StandardsOfBehaviour/StandardsOfBehaviour";
import TeamNorms from "../TeamNorms/TeamNorms";
import ValuesInAction from "../ValuesInAction/ValuesInAction";
import TheDosAndDonts from "../TheDosAndDonts/TheDosAndDonts";
import TheDosAndDontsForEachValue from "../TheDosAndDontsForEachValue/TheDosAndDontsForEachValue";
import AdviceOnLivingTheValues from "../AdviceOnLivingTheValues/AdviceOnLivingTheValues";
import RespectWork from "../RespectWork/RespectWork";
import CausesForConcern from "../CausesForConcern/CausesForConcern";
import SafetyWork from "../SafetyWork/SafetyWork";
import WorkplaceSafetyCulture from "../WorkplaceSafetyCulture/WorkplaceSafetyCulture";
import HarassmentAndBullying from "../HarassmentAndBullying/HarassmentAndBullying";
import OccupationalViolence from "../OccupationalViolence/OccupationalViolence";
import LeadershipEssentials from "../LeadershipEssentials/LeadershipEssentials";
import LeadershipStrengths from "../LeadershipStrengths/LeadershipStrengths";
import LeadershipPriorities from "../LeadershipPriorities/LeadershipPriorities";
import LeadershipBehaviours from "../LeadershipBehaviours/LeadershipBehaviours";
import MessageInABottle from "../MessageInABottle/MessageInABottle";
import FeedbackFromLastSurvey from "../FeedbackFromLastSurvey/FeedbackFromLastSurvey";
import MessageInABottleTDM from "../MessageInABottleTDM/MessageInABottleTDM";
import TheIssuesThatMatter from "../TheIssuesThatMatter/TheIssuesThatMatter";
import OrganisationalInitiatives from "../OrganisationalInitiatives/OrganisationalInitiatives";
import EmbracingOurChallenges from "../EmbracingOurChallenges/EmbracingOurChallenges";
import ChangeMomentum from "../ChangeMomentum/ChangeMomentum";
import HowAreWeTravelling from "../HowAreWeTravelling/HowAreWeTravelling";
import YourAdvice from "../YourAdvice/YourAdvice";
import ClientExpectations from "../ClientExpectations/ClientExpectations";
import RiskOfClientAbuse from "../RiskOfClientAbuse/RiskOfClientAbuse";
import ClientSafetyCulture from "../ClientSafetyCulture/ClientSafetyCulture";
import IntellectualProperty from "../IntellectualProperty/IntellectualProperty";
import Privacy from "../Privacy/Privacy";

// make references to the components by type
const Components = {
  CoverPage,
  Definitions,
  Instructions,
  Engagement,
  Expectations,
  PersonalWellBeing,
  WorkLifeIntegration,
  TrulyGreatPlaceToWork,
  NPS,
  AttractionRetention,
  InclusionWork,
  DrivingTheFuture,
  StrategicDirection,
  StrategicDirectionIAM,
  StatisticalGroupings,
  AcknowledgementOfDiversity,
  StandardsOfBehaviour,
  TeamNorms,
  ValuesInAction,
  TheDosAndDonts,
  TheDosAndDontsForEachValue,
  AdviceOnLivingTheValues,
  RespectWork,
  CausesForConcern,
  SafetyWork,
  WorkplaceSafetyCulture,
  HarassmentAndBullying,
  OccupationalViolence,
  LeadershipEssentials,
  LeadershipStrengths,
  LeadershipPriorities,
  LeadershipBehaviours,
  MessageInABottle,
  FeedbackFromLastSurvey,
  MessageInABottleTDM,
  TheIssuesThatMatter,
  OrganisationalInitiatives,
  EmbracingOurChallenges,
  ChangeMomentum,
  HowAreWeTravelling,
  YourAdvice,
  ClientExpectations,
  RiskOfClientAbuse,
  ClientSafetyCulture,
  IntellectualProperty,
  Privacy,
};

// a component that will render one or more components
// that it doesn't explicitly include in it's JSX
export const SwitchedPages = (props) => {

  // make a reference using a Capitalized variable name
  // to the component you need to render
  // where props.type is one of 'Definitions' or 'Engagement'
  let Component = Components[ props.type ];

  // use the reference to the component with the
  // Capitalized variable name to render it
  return (<Component { ...props } />);

};

export default SwitchedPages;
