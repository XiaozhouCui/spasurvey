Metadata(en-AU, Question, Label)
  'Metadata VBScript file for [BPA, Test Survey]
  HDATA -
  [
    TemplateLocation = "TEST_20_ES_files",
    Template = "DefaultLayout.html",
    HtmlOptions = "NoExpiryMetaTags"
  ];

  '''''''''''''''''''' Begin shared lists ''''''''''''''''''''

  Scale1to6Positive - define
  { 
    _1 - [ Value = "1" ],
    _2 - [ Value = "2" ],
    _3 - [ Value = "3" ],
    _4 - [ Value = "4" ],
    _5 - [ Value = "5" ],
    _6 - [ Value = "6" ],
    _999 - [ Value = "999" ] NA
  };

  Scale1to6Agree - define
  { 
    _1 - [ Value = "1" ],
    _2 - [ Value = "2" ],
    _3 - [ Value = "3" ],
    _4 - [ Value = "4" ],
    _5 - [ Value = "5" ],
    _6 - [ Value = "6" ],
    _999 - [ Value = "999" ] NA
  };

  YesNo - define
  { 
    _1  "Yes" [ Value = "1" ],
    _2  "No" [ Value = "2" ],
    _999 - [ Value = "999" ] NA
  };

  Scale0to10 - define
  { 
    _0 - [ Value = "0" ],
    _1 - [ Value = "1" ],
    _2 - [ Value = "2" ],
    _3 - [ Value = "3" ],
    _4 - [ Value = "4" ],
    _5 - [ Value = "5" ],
    _6 - [ Value = "6" ],
    _7 - [ Value = "7" ],
    _8 - [ Value = "8" ],
    _9 - [ Value = "9" ],
    _10 - [ Value = "10" ],
    _999 - [ Value = "999" ] NA
  };

  Scale1to6AgreeNA - define
  { 
    _1 - [ Value = "1" ],
    _2 - [ Value = "2" ],
    _3 - [ Value = "3" ],
    _4 - [ Value = "4" ],
    _5 - [ Value = "5" ],
    _6 - [ Value = "6" ],
    _7 - [ Value = "7" ],
    _999 - [ Value = "999" ] NA
  };

  Scale1to3YesNotSureNo - define
  { 
    _1 - [ Value = "1" ],
    _2 - [ Value = "2" ],
    _3 - [ Value = "3" ],
    _999 - [ Value = "999" ] NA
  };

  D0111_Manager_list - define
  { 
    _1  "CEO" [ Value = "1" ],
    _2  "SLT" [ Value = "2" ],
    _3  "Manager" [ Value = "3" ],
    _4  "Team Leader" [ Value = "4" ],
    _5  "Co-ordinator" [ Value = "5" ],
    _6  "Supervisor" [ Value = "6" ],
    _7  "Officer" [ Value = "7" ],
    _998  "Prefer not to say" [ Value = "998" ],
    _999 - [ Value = "999" ] NA
  };

  Scale1to3RegularlySometimesNever - define
  { 
    _1 - [ Value = "1" ],
    _2 - [ Value = "2" ],
    _3 - [ Value = "3" ],
    _999 - [ Value = "999" ] NA
  };

  Scale1to3Issues - define
  { 
    _1 - [ Value = "1" ],
    _2 - [ Value = "2" ],
    _3 - [ Value = "3" ],
    _999 - [ Value = "999" ] NA
  };

  YesNotSureNoNotEmployed - define
  { 
    _1 - [ Value = "1" ],
    _2 - [ Value = "2" ],
    _3 - [ Value = "3" ],
    _4 - [ Value = "4" ],
    _999 - [ Value = "999" ] NA
  };

  D0069_Years_list - define
  { 
    _1  "< 1 yr " [ Value = "1" ],
    _2  "1 - 2 yrs" [ Value = "2" ],
    _3  "3 - 5 yrs" [ Value = "3" ],
    _4  "6 - 10 yrs" [ Value = "4" ],
    _5  "11 - 15 yrs" [ Value = "5" ],
    _6  "16 - 20 yrs" [ Value = "6" ],
    _7  "21 - 25 yrs" [ Value = "7" ],
    _8  "26 - 30 yrs" [ Value = "8" ],
    _9  "> 30 yrs" [ Value = "9" ],
    _998  "Prefer not to say" [ Value = "998" ],
    _999 - [ Value = "999" ] NA
  };

  D0060_Age_list - define
  { 
    _1  "Up to 25 yrs" [ Value = "1" ],
    _2  "26 - 30 yrs" [ Value = "2" ],
    _3  "31 - 35 yrs" [ Value = "3" ],
    _4  "36 - 40 yrs" [ Value = "4" ],
    _5  "41 - 45 yrs" [ Value = "5" ],
    _6  "46 - 50 yrs" [ Value = "6" ],
    _7  "51 - 55 yrs" [ Value = "7" ],
    _8  "56 - 60 yrs" [ Value = "8" ],
    _9  "Over 60 yrs" [ Value = "9" ],
    _998  "Prefer not to say" [ Value = "998" ],
    _999 - [ Value = "999" ] NA
  };

  D0039_EmployStatus_list - define
  { 
    _1  "Full-time" [ Value = "1" ],
    _2  "Part-time" [ Value = "2" ],
    _3  "Casual" [ Value = "3" ],
    _998  "Prefer not to say" [ Value = "998" ],
    _999 - [ Value = "999" ] NA
  };

  D0077_Position_list - define
  { 
    _1  "CEO & SLT" [ Value = "1" ],
    _2  "Manager" [ Value = "2" ],
    _3  "Team Leader" [ Value = "3" ],
    _4  "Co-ordinator" [ Value = "4" ],
    _5  "Supervisor" [ Value = "5" ],
    _6  "Officer" [ Value = "6" ],
    _998  "Prefer not to say" [ Value = "998" ],
    _999 - [ Value = "999" ] NA
  };

  D0024_Gender_other_identify - define
  { 
    _1  "Male" [ Value = "1" ],
    _2  "Female" [ Value = "2" ],
    _3  "Other (prefer not to identify exclusively as being either Male or Female)" [ Value = "3" ],
    _998  "Prefer not to say" [ Value = "998" ],
    _999 - [ Value = "999" ] NA
  };

  YesNoPreferNotToSay - define
  { 
    _1  "Yes" [ Value = "1" ],
    _2  "No" [ Value = "2" ],
    _998  "Prefer not to say" [ Value = "998" ],
    _999 - [ Value = "999" ] NA
  };

  PaidYes - define
  { 
    _1  "<strong>Yes,</strong> I wish to be paid 1 hour’s wage for completing this survey." [ Value = "1" ],
    _999 - [ Value = "999" ] NA
  };


  '''''''''''''''''''' End shared lists ''''''''''''''''''''

  '''''''''''''''''''' Coverpage ''''''''''''''''''''

  CoverpageInfo - info;

  '''''''''''''''''''' End_Coverpage ''''''''''''''''''''

  '''''''''''''''''''' Begin_Survey ''''''''''''''''''''
  
  SurveyInfo "{#WorkUnit}" info;
  f01183_Optimism01 -  categorical [..1] { use Scale1to6Positive sublist };
  f01184_Optimism02 -  categorical [..1] { use Scale1to6Positive sublist };
  f01194_Optimism02b -  categorical [..1] { use Scale1to6Positive sublist };
  f01185_Optimism03 -  categorical [..1] { use Scale1to6Positive sublist };
  f01186_Optimism04 -  categorical [..1] { use Scale1to6Positive sublist };
  f01187_Optimism05 -  categorical [..1] { use Scale1to6Positive sublist };
  f01188_Optimism06 -  categorical [..1] { use Scale1to6Positive sublist };
  f01189_Optimism07 -  categorical [..1] { use Scale1to6Positive sublist };
  f01190_Optimism08 -  categorical [..1] { use Scale1to6Positive sublist };
  f01191_Optimism13 -  categorical [..1] { use Scale1to6Positive sublist };
  f00546_ExpectationOrgn01 - text [..250];
  f00547_ExpectationOrgn02 - text [..250];
  f00548_ExpectationOrgn03 - text [..250];
  f00549_RatingOrgn01 -  categorical [..1] { use Scale1to6Agree sublist };
  f00550_RatingOrgn02 -  categorical [..1] { use Scale1to6Agree sublist };
  f00551_RatingOrgn03 -  categorical [..1] { use Scale1to6Agree sublist };
  f00748_M27FlexibleHours -  categorical [..1] { use Scale1to6Agree sublist };
  f00749_M28Workloads -  categorical [..1] { use Scale1to6Agree sublist };
  f00734_M13FairPay -  categorical [..1] { use Scale1to6Agree sublist };
  f00747_M26Remuneration -  categorical [..1] { use Scale1to6Agree sublist };
  f00741_M20Recognition -  categorical [..1] { use Scale1to6Agree sublist };
  f00738_M17FriendlyEnvironment -  categorical [..1] { use Scale1to6Agree sublist };
  f00737_M16CareerOpportunities -  categorical [..1] { use Scale1to6Agree sublist };
  f00736_M15DevelopmentOpportunities -  categorical [..1] { use Scale1to6Agree sublist };
  f00739_M18ClearCommunication -  categorical [..1] { use Scale1to6Agree sublist };
  f00740_M19Support -  categorical [..1] { use Scale1to6Agree sublist };
  f00732_M11_PhysicalConditions -  categorical [..1] { use Scale1to6Agree sublist };
  f00733_M12SafeEnvironment -  categorical [..1] { use Scale1to6Agree sublist };
  f00735_M14JobSecurity -  categorical [..1] { use Scale1to6Agree sublist };
  f04936_DailyFrustration01 - text [..500];
  f04937_DailyFrustration02 - text [..500];
  f04938_DailyFrustration03 - text [..500];
  f21588_WellBeing01InControl -  categorical [..1] { use Scale1to6Agree sublist };
  f21589_WellBeing02Competent -  categorical [..1] { use Scale1to6Agree sublist };
  f21590_WellBeing03Optimistic -  categorical [..1] { use Scale1to6Agree sublist };
  f21591_WellBeing04Useful -  categorical [..1] { use Scale1to6Agree sublist };
  f21592_WellBeing05MakingADifference -  categorical [..1] { use Scale1to6Agree sublist };
  f21593_WellBeing06Valued -  categorical [..1] { use Scale1to6Agree sublist };
  f21594_WellBeing07TeamMember -  categorical [..1] { use Scale1to6Agree sublist };
  f37155_WellBeing24Respect -  categorical [..1] { use Scale1to6Agree sublist };
  f37156_WellBeing25Individual -  categorical [..1] { use Scale1to6Agree sublist };
  f37566_WellBeing26Included -  categorical [..1] { use Scale1to6Agree sublist };
  f37783_WellBeing35Decisions -  categorical [..1] { use Scale1to6Agree sublist };
  f36900_WellBeing31_FeelSafe -  categorical [..1] { use Scale1to6Agree sublist };
  f37784_WellBeing36SpeakUp -  categorical [..1] { use Scale1to6Agree sublist };
  f21595_WellBeing08MyBest -  categorical [..1] { use Scale1to6Agree sublist };
  f21596_WellBeing09MyLearning -  categorical [..1] { use Scale1to6Agree sublist };
  f21597_WellBeing10MyGoals -  categorical [..1] { use Scale1to6Agree sublist };
  f36808_WellBeing21LookAfterMyself -  categorical [..1] { use Scale1to6Agree sublist };
  f36810_WellBeing23AddressConflict -  categorical [..1] { use Scale1to6Agree sublist };
  f21713_WorkMeaningful -  categorical [..1] { use Scale1to6Agree sublist };
  f21714_WorkPurposeful -  categorical [..1] { use Scale1to6Agree sublist };
  f21715_WorkStimulating -  categorical [..1] { use Scale1to6Agree sublist };
  f21711_WorkEnergizing -  categorical [..1] { use Scale1to6Agree sublist };
  f37332_WorkProudOf -  categorical [..1] { use Scale1to6Agree sublist };
  f37815_ProudOfPersonal - text [..250];
  f00638_BalanceYesNo -  categorical [..1] { use YesNo sublist };
  f00639_BalanceEasier01 - text [..250];
  f00642_BalanceHarder01 - text [..250];
  f00704_FlexPrac -  categorical [..1] { use YesNo sublist };
  f00700_RatingWorkHome01 -  categorical [..1] { use Scale1to6Agree sublist };
  f00701_RatingWorkHome02 -  categorical [..1] { use Scale1to6Agree sublist };
  f00702_RatingWorkHome03 -  categorical [..1] { use Scale1to6Agree sublist };
  f00703_RatingWorkHome04 -  categorical [..1] { use Scale1to6Agree sublist };
  f01180_TrulyGreat -  categorical [..1] { use YesNo sublist };
  f01181_WhyYes - text [..500];
  f01182_WhyNo - text [..500];
  f21833_NPSWork - style(Orientation = "Row", Rows = "1") categorical [..1] { use Scale0to10 sublist };
  f21925_NPSWorkReason - text [..500];
  f21834_NPSService - style(Orientation = "Row", Rows = "1") categorical [..1] { use Scale0to10 sublist };
  f21926_NPSServiceReason - text [..500];
  f00618_Attraction01 - text [..250];
  f00621_Retention01 - text [..250];
  f00666_IntentionToLeave -  categorical [..1] { use YesNo sublist };
  f00667_IntentionToLeaveReason - text [..250];
  f37588_InclusiveRealAction -  categorical [..1] { use Scale1to6Agree sublist };
  f14773_InclusiveEquityCulture -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f14768_InclusiveEquityGender -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f14772_InclusiveEquitySexual -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f37791_InclusiveEquityAge -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f37790_InclusiveEquityFaith -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f37789_InclusiveEquityATSI -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f37788_InclusiveEquityDisability -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f10854_InclusiveCultural01 -  categorical [..1] { use Scale1to6Agree sublist };
  f10856_InclusiveCultural03 -  categorical [..1] { use Scale1to6Agree sublist };
  f11438_InclusiveCultural05 -  categorical [..1] { use Scale1to6Agree sublist };
  f37589_InclusiveCultural06 -  categorical [..1] { use Scale1to6Agree sublist };
  f22291_GenderEquality01 -  categorical [..1] { use Scale1to6Agree sublist };
  f22292_GenderEquality02 -  categorical [..1] { use Scale1to6Agree sublist };
  f22293_GenderEquality03 -  categorical [..1] { use Scale1to6Agree sublist };
  f14770_InclusiveWomenEEO -  categorical [..1] { use Scale1to6Agree sublist };
  f36910_DrivingFuture01 -  categorical [..1] { use Scale1to6Agree sublist };
  f36911_DrivingFuture02 -  categorical [..1] { use Scale1to6Agree sublist };
  f36913_DrivingFuture03 -  categorical [..1] { use Scale1to6Agree sublist };
  f36914_DrivingFuture04 -  categorical [..1] { use Scale1to6Agree sublist };
  f36915_DrivingFuture05 -  categorical [..1] { use Scale1to6Agree sublist };
  f36916_DrivingFuture06 -  categorical [..1] { use Scale1to6Agree sublist };
  f36917_DrivingFuture07 -  categorical [..1] { use Scale1to6Agree sublist };
  f36918_DrivingFuture08 -  categorical [..1] { use Scale1to6Agree sublist };
  f36919_DrivingFuture09 -  categorical [..1] { use Scale1to6Agree sublist };
  f36920_DrivingFuture10 -  categorical [..1] { use Scale1to6Agree sublist };
  f36921_DrivingFuture11 -  categorical [..1] { use Scale1to6Agree sublist };
  f37565_DrivingFuture19 -  categorical [..1] { use Scale1to6Agree sublist };
  f36922_DrivingFuture12 -  categorical [..1] { use Scale1to6Agree sublist };
  f36923_DrivingFuture13 -  categorical [..1] { use Scale1to6Agree sublist };
  f36924_DrivingFuture14 -  categorical [..1] { use Scale1to6Agree sublist };
  f37816_ProudOfOrg - text [..250];

  '''''''''''''''''''' End_Survey ''''''''''''''''''''

  '''''''''''''''''''' Begin_ValuesInAction ''''''''''''''''''''
  
  f06085_ValueExec01 -  categorical [..1] { use Scale1to6Agree sublist };
  f06086_ValueExec02 -  categorical [..1] { use Scale1to6Agree sublist };
  f06087_ValueExec03 -  categorical [..1] { use Scale1to6Agree sublist };
  f06088_ValueExec04 -  categorical [..1] { use Scale1to6Agree sublist };
  f06089_ValueExec05 -  categorical [..1] { use Scale1to6Agree sublist };
  f10369_ValueManager01 -  categorical [..1] { use Scale1to6Agree sublist };
  f10370_ValueManager02 -  categorical [..1] { use Scale1to6Agree sublist };
  f10371_ValueManager03 -  categorical [..1] { use Scale1to6Agree sublist };
  f10372_ValueManager04 -  categorical [..1] { use Scale1to6Agree sublist };
  f10480_ValueManager05 -  categorical [..1] { use Scale1to6Agree sublist };
  f01347_ValuePrac01 -  categorical [..1] { use Scale1to6Agree sublist };
  f01348_ValuePrac02 -  categorical [..1] { use Scale1to6Agree sublist };
  f01349_ValuePrac03 -  categorical [..1] { use Scale1to6Agree sublist };
  f01350_ValuePrac04 -  categorical [..1] { use Scale1to6Agree sublist };
  f01351_ValuePrac05 -  categorical [..1] { use Scale1to6Agree sublist };
  f10493_ValuesDiscuss01 -  categorical [..1] { use Scale1to3YesNotSureNo sublist };
  f10495_ValuesReport01 -  categorical [..1] { use Scale1to3YesNotSureNo sublist };
  f10494_ValuesManaged01 -  categorical [..1] { use Scale1to3YesNotSureNo sublist };

  '''''''''''''''''''' End_ValuesInAction ''''''''''''''''''''

  '''''''''''''''''''' Begin_LeadershipEssentials ''''''''''''''''''''
  
  D0111_Manager - style(Orientation = "Column", Columns = "1") categorical [..1] { use D0111_Manager_list sublist };
  f00716_LeadershipStyle01 - text [..250];
  f00717_LeadershipStyle02 - text [..250];
  f00718_LeadershipStyle03 - text [..250];
  f00555_MgrPriorityExpectation01 - text [..250];
  f00556_MgrPriorityExpectation02 - text [..250];
  f00557_MgrPriorityExpectation03 - text [..250];
  f00533_ExpectationMgr01 - text [..250];
  f00534_ExpectationMgr02 - text [..250];
  f00535_ExpectationMgr03 - text [..250];
  f00536_RatingMgr01 -  categorical [..1] { use Scale1to6Agree sublist };
  f00537_RatingMgr02 -  categorical [..1] { use Scale1to6Agree sublist };
  f00538_RatingMgr03 -  categorical [..1] { use Scale1to6Agree sublist };
  f00059_Coach01 -  categorical [..1] { use Scale1to3RegularlySometimesNever sublist };
  f00060_Coach02 -  categorical [..1] { use Scale1to3RegularlySometimesNever sublist };
  f00061_Coach03 -  categorical [..1] { use Scale1to3RegularlySometimesNever sublist };
  f00062_Coach04 -  categorical [..1] { use Scale1to3RegularlySometimesNever sublist };
  f00063_Coach05 -  categorical [..1] { use Scale1to3RegularlySometimesNever sublist };
  f00064_Coach06 -  categorical [..1] { use Scale1to3RegularlySometimesNever sublist };
  f00065_Coach07 -  categorical [..1] { use Scale1to3RegularlySometimesNever sublist };
  f00067_Coach08 -  categorical [..1] { use Scale1to3RegularlySometimesNever sublist };
  f00072_Coach13 -  categorical [..1] { use Scale1to3RegularlySometimesNever sublist };
  f00068_Coach09a -  categorical [..1] { use Scale1to3RegularlySometimesNever sublist };
  f00069_Coach10a -  categorical [..1] { use Scale1to3RegularlySometimesNever sublist };
  f00070_Coach11a -  categorical [..1] { use Scale1to3RegularlySometimesNever sublist };
  f00071_Coach12a -  categorical [..1] { use Scale1to3RegularlySometimesNever sublist };

  '''''''''''''''''''' End_LeadershipEssentials ''''''''''''''''''''

  '''''''''''''''''''' Begin_LeadershipBehaviours ''''''''''''''''''''
  
  f00846_Lead20 -  categorical [..1] { use Scale1to6Agree sublist };
  f00847_Lead21 -  categorical [..1] { use Scale1to6Agree sublist };
  f00848_Lead22 -  categorical [..1] { use Scale1to6Agree sublist };
  f00849_Lead23 -  categorical [..1] { use Scale1to6Agree sublist };
  f00850_Lead24 -  categorical [..1] { use Scale1to6Agree sublist };
  f00851_Lead25 -  categorical [..1] { use Scale1to6Agree sublist };
  f00852_Lead26 -  categorical [..1] { use Scale1to6Agree sublist };
  f00853_Lead27 -  categorical [..1] { use Scale1to6Agree sublist };
  f00854_Lead28 -  categorical [..1] { use Scale1to6Agree sublist };
  f00855_Lead29 -  categorical [..1] { use Scale1to6Agree sublist };
  f00856_Lead30 -  categorical [..1] { use Scale1to6Agree sublist };
  f00857_Lead31 -  categorical [..1] { use Scale1to6Agree sublist };
  f00858_Lead32 -  categorical [..1] { use Scale1to6Agree sublist };
  f00859_Lead33 -  categorical [..1] { use Scale1to6Agree sublist };
  f00860_Lead34 -  categorical [..1] { use Scale1to6Agree sublist };
  f00861_Lead35 -  categorical [..1] { use Scale1to6Agree sublist };
  f00862_Lead36 -  categorical [..1] { use Scale1to6Agree sublist };
  f00863_Lead37 -  categorical [..1] { use Scale1to6Agree sublist };
  f00864_Lead38 -  categorical [..1] { use Scale1to6Agree sublist };
  f00865_Lead39 -  categorical [..1] { use Scale1to6Agree sublist };

  '''''''''''''''''''' End_LeadershipBehaviours ''''''''''''''''''''

  '''''''''''''''''''' Begin_TheIssuesThatMatter ''''''''''''''''''''
  
  f05403_Issues02 -  categorical [..1] { use Scale1to3Issues sublist };
  f05409_Issues08 -  categorical [..1] { use Scale1to3Issues sublist };
  f05426_Issues25 -  categorical [..1] { use Scale1to3Issues sublist };
  f05404_Issues03 -  categorical [..1] { use Scale1to3Issues sublist };
  f05407_Issues06 -  categorical [..1] { use Scale1to3Issues sublist };
  f05410_Issues09 -  categorical [..1] { use Scale1to3Issues sublist };
  f05413_Issues12 -  categorical [..1] { use Scale1to3Issues sublist };
  f05421_Issues20 -  categorical [..1] { use Scale1to3Issues sublist };
  f05425_Issues24 -  categorical [..1] { use Scale1to3Issues sublist };
  f05431_Issues30 -  categorical [..1] { use Scale1to3Issues sublist };
  f05424_Issues23 -  categorical [..1] { use Scale1to3Issues sublist };
  f05427_Issues26 -  categorical [..1] { use Scale1to3Issues sublist };
  f05402_Issues01 -  categorical [..1] { use Scale1to3Issues sublist };
  f05417_Issues16 -  categorical [..1] { use Scale1to3Issues sublist };
  f10637_Issues37 -  categorical [..1] { use Scale1to3Issues sublist };
  f11442_Issues42 -  categorical [..1] { use Scale1to3Issues sublist };
  f05429_Issues28 -  categorical [..1] { use Scale1to3Issues sublist };
  f05411_Issues10 -  categorical [..1] { use Scale1to3Issues sublist };
  f05412_Issues11 -  categorical [..1] { use Scale1to3Issues sublist };
  f05416_Issues15 -  categorical [..1] { use Scale1to3Issues sublist };
  f10638_Issues38 -  categorical [..1] { use Scale1to3Issues sublist };
  f21692_Issues45 -  categorical [..1] { use Scale1to3Issues sublist };
  f05408_Issues07 -  categorical [..1] { use Scale1to3Issues sublist };
  f05419_Issues18 -  categorical [..1] { use Scale1to3Issues sublist };
  f05423_Issues22 -  categorical [..1] { use Scale1to3Issues sublist };
  f05428_Issues27 -  categorical [..1] { use Scale1to3Issues sublist };
  f05418_Issues17 -  categorical [..1] { use Scale1to3Issues sublist };
  f05430_Issues29 -  categorical [..1] { use Scale1to3Issues sublist };

  '''''''''''''''''''' End_TheIssuesThatMatter ''''''''''''''''''''

  '''''''''''''''''''' Begin_ChangeMomentum ''''''''''''''''''''
  
  f01255_Innovation09 -  categorical [..1] { use Scale1to6Positive sublist };
  f04459_SigImprove -  categorical [..1] { use Scale1to6Positive sublist };

  '''''''''''''''''''' End_ChangeMomentum ''''''''''''''''''''

  '''''''''''''''''''' Begin_CommunityExpectations ''''''''''''''''''''
  
  ph_CommunityExpect01 - text [..250];
  ph_CommunityExpect02 - text [..250];
  ph_CommunityExpect03 - text [..250];
  ph_RatingComExp01 -  categorical [..1] { use Scale1to6Agree sublist };
  ph_RatingComExp02 -  categorical [..1] { use Scale1to6Agree sublist };
  ph_RatingComExp03 -  categorical [..1] { use Scale1to6Agree sublist };

  '''''''''''''''''''' End_CommunityExpectations ''''''''''''''''''''

  '''''''''''''''''''' Begin_MessageinaBottle ''''''''''''''''''''
  
  f00930_MessageinaBottle - text [..1000];

  '''''''''''''''''''' End_MessageinaBottle ''''''''''''''''''''

  '''''''''''''''''''' Begin_FeedbackFromtheLastSurvey ''''''''''''''''''''
  
  D0344_BPASurveyPast -  categorical [..1] { use YesNotSureNoNotEmployed sublist };
  D0674_BPASurveyFeedbackOrg -  categorical [..1] { use YesNotSureNoNotEmployed sublist };
  D0675_BPASurveyFeedbackMgr -  categorical [..1] { use YesNotSureNoNotEmployed sublist };
  D0676_BPASurveyAction -  categorical [..1] { use YesNotSureNoNotEmployed sublist };
  D0677_BPASurveyPosImpact -  categorical [..1] { use YesNotSureNoNotEmployed sublist };

  '''''''''''''''''''' End_FeedbackFromtheLastSurvey ''''''''''''''''''''

  '''''''''''''''''''' Begin_StatisticalGroupings ''''''''''''''''''''
  
  D0069_Years - style(Orientation = "Column", Columns = "4") categorical [..1] { use D0069_Years_list sublist };
  D0060_Age - style(Orientation = "Column", Columns = "4") categorical [..1] { use D0060_Age_list sublist };
  D0039_EmployStatus - style(Orientation = "Column", Columns = "4") categorical [..1] { use D0039_EmployStatus_list sublist };
  D0077_Position - style(Orientation = "Column", Columns = "1") categorical [..1] { use D0077_Position_list sublist };

  '''''''''''''''''''' End_StatisticalGroupings ''''''''''''''''''''

  '''''''''''''''''''' Begin_AcknowledgementOfDiversity ''''''''''''''''''''
  
  D0024_Gender - style(Orientation = "Column", Columns = "1") categorical [..1] { use D0024_Gender_other_identify sublist };
  D0793_BornAusYesNo -  categorical [..1] { use YesNoPreferNotToSay sublist };
  D0794_EnglishFirstYesNo -  categorical [..1] { use YesNoPreferNotToSay sublist };
  D0220_ATSI -  categorical [..1] { use YesNoPreferNotToSay sublist };
  D0795_DisabilityYesNo -  categorical [..1] { use YesNoPreferNotToSay sublist };
  D0739_LGBTI -  categorical [..1] { use YesNoPreferNotToSay sublist };

  '''''''''''''''''''' End_AcknowledgementOfDiversity ''''''''''''''''''''

  '''''''''''''''''''' Begin_ThankYouForCompletingTheSurvey ''''''''''''''''''''
  
  PaidYesNo -  categorical [..1] { use PaidYes sublist };
  NameForRelease - text [..255];

  '''''''''''''''''''' End_ThankYouForCompletingTheSurvey ''''''''''''''''''''

  CoverPage -
  page(
    CoverpageInfo
  );

  Survey -
  page(
    SurveyInfo,
    f01183_Optimism01,
    f01184_Optimism02,
    f01194_Optimism02b,
    f01185_Optimism03,
    f01186_Optimism04,
    f01187_Optimism05,
    f01188_Optimism06,
    f01189_Optimism07,
    f01190_Optimism08,
    f01191_Optimism13,
    f00546_ExpectationOrgn01,
    f00547_ExpectationOrgn02,
    f00548_ExpectationOrgn03,
    f00549_RatingOrgn01,
    f00550_RatingOrgn02,
    f00551_RatingOrgn03,
    f00748_M27FlexibleHours,
    f00749_M28Workloads,
    f00734_M13FairPay,
    f00747_M26Remuneration,
    f00741_M20Recognition,
    f00738_M17FriendlyEnvironment,
    f00737_M16CareerOpportunities,
    f00736_M15DevelopmentOpportunities,
    f00739_M18ClearCommunication,
    f00740_M19Support,
    f00732_M11_PhysicalConditions,
    f00733_M12SafeEnvironment,
    f00735_M14JobSecurity,
    f04936_DailyFrustration01,
    f04937_DailyFrustration02,
    f04938_DailyFrustration03,
    f21588_WellBeing01InControl,
    f21589_WellBeing02Competent,
    f21590_WellBeing03Optimistic,
    f21591_WellBeing04Useful,
    f21592_WellBeing05MakingADifference,
    f21593_WellBeing06Valued,
    f21594_WellBeing07TeamMember,
    f37155_WellBeing24Respect,
    f37156_WellBeing25Individual,
    f37566_WellBeing26Included,
    f37783_WellBeing35Decisions,
    f36900_WellBeing31_FeelSafe,
    f37784_WellBeing36SpeakUp,
    f21595_WellBeing08MyBest,
    f21596_WellBeing09MyLearning,
    f21597_WellBeing10MyGoals,
    f36808_WellBeing21LookAfterMyself,
    f36810_WellBeing23AddressConflict,
    f21713_WorkMeaningful,
    f21714_WorkPurposeful,
    f21715_WorkStimulating,
    f21711_WorkEnergizing,
    f37332_WorkProudOf,
    f37815_ProudOfPersonal,
    f00638_BalanceYesNo,
    f00639_BalanceEasier01,
    f00642_BalanceHarder01,
    f00704_FlexPrac,
    f00700_RatingWorkHome01,
    f00701_RatingWorkHome02,
    f00702_RatingWorkHome03,
    f00703_RatingWorkHome04,
    f01180_TrulyGreat,
    f01181_WhyYes,
    f01182_WhyNo,
    f21833_NPSWork,
    f21925_NPSWorkReason,
    f21834_NPSService,
    f21926_NPSServiceReason,
    f00618_Attraction01,
    f00621_Retention01,
    f00666_IntentionToLeave,
    f00667_IntentionToLeaveReason,
    f37588_InclusiveRealAction,
    f14773_InclusiveEquityCulture,
    f14768_InclusiveEquityGender,
    f14772_InclusiveEquitySexual,
    f37791_InclusiveEquityAge,
    f37790_InclusiveEquityFaith,
    f37789_InclusiveEquityATSI,
    f37788_InclusiveEquityDisability,
    f10854_InclusiveCultural01,
    f10856_InclusiveCultural03,
    f11438_InclusiveCultural05,
    f37589_InclusiveCultural06,
    f22291_GenderEquality01,
    f22292_GenderEquality02,
    f22293_GenderEquality03,
    f14770_InclusiveWomenEEO,
    f36910_DrivingFuture01,
    f36911_DrivingFuture02,
    f36913_DrivingFuture03,
    f36914_DrivingFuture04,
    f36915_DrivingFuture05,
    f36916_DrivingFuture06,
    f36917_DrivingFuture07,
    f36918_DrivingFuture08,
    f36919_DrivingFuture09,
    f36920_DrivingFuture10,
    f36921_DrivingFuture11,
    f37565_DrivingFuture19,
    f36922_DrivingFuture12,
    f36923_DrivingFuture13,
    f36924_DrivingFuture14,
    f37816_ProudOfOrg
    
  );

  ValuesInAction -
  page(
    f06085_ValueExec01,
    f06086_ValueExec02,
    f06087_ValueExec03,
    f06088_ValueExec04,
    f06089_ValueExec05,
    f10369_ValueManager01,
    f10370_ValueManager02,
    f10371_ValueManager03,
    f10372_ValueManager04,
    f10480_ValueManager05,
    f01347_ValuePrac01,
    f01348_ValuePrac02,
    f01349_ValuePrac03,
    f01350_ValuePrac04,
    f01351_ValuePrac05,
    f10493_ValuesDiscuss01,
    f10495_ValuesReport01,
    f10494_ValuesManaged01
    
  );

  LeadershipEssentials -
  page(
    D0111_Manager,
    f00716_LeadershipStyle01,
    f00717_LeadershipStyle02,
    f00718_LeadershipStyle03,
    f00555_MgrPriorityExpectation01,
    f00556_MgrPriorityExpectation02,
    f00557_MgrPriorityExpectation03,
    f00533_ExpectationMgr01,
    f00534_ExpectationMgr02,
    f00535_ExpectationMgr03,
    f00536_RatingMgr01,
    f00537_RatingMgr02,
    f00538_RatingMgr03,
    f00059_Coach01,
    f00060_Coach02,
    f00061_Coach03,
    f00062_Coach04,
    f00063_Coach05,
    f00064_Coach06,
    f00065_Coach07,
    f00067_Coach08,
    f00072_Coach13,
    f00068_Coach09a,
    f00069_Coach10a,
    f00070_Coach11a,
    f00071_Coach12a
    
  );

  LeadershipBehaviours -
  page(
    f00846_Lead20,
    f00847_Lead21,
    f00848_Lead22,
    f00849_Lead23,
    f00850_Lead24,
    f00851_Lead25,
    f00852_Lead26,
    f00853_Lead27,
    f00854_Lead28,
    f00855_Lead29,
    f00856_Lead30,
    f00857_Lead31,
    f00858_Lead32,
    f00859_Lead33,
    f00860_Lead34,
    f00861_Lead35,
    f00862_Lead36,
    f00863_Lead37,
    f00864_Lead38,
    f00865_Lead39
    
  );

  TheIssuesThatMatter -
  page(
    f05403_Issues02,
    f05409_Issues08,
    f05426_Issues25,
    f05404_Issues03,
    f05407_Issues06,
    f05410_Issues09,
    f05413_Issues12,
    f05421_Issues20,
    f05425_Issues24,
    f05431_Issues30,
    f05424_Issues23,
    f05427_Issues26,
    f05402_Issues01,
    f05417_Issues16,
    f10637_Issues37,
    f11442_Issues42,
    f05429_Issues28,
    f05411_Issues10,
    f05412_Issues11,
    f05416_Issues15,
    f10638_Issues38,
    f21692_Issues45,
    f05408_Issues07,
    f05419_Issues18,
    f05423_Issues22,
    f05428_Issues27,
    f05418_Issues17,
    f05430_Issues29
    
  );

  ChangeMomentum -
  page(
    f01255_Innovation09,
    f04459_SigImprove
    
  );

  CommunityExpectations -
  page(
    ph_CommunityExpect01,
    ph_CommunityExpect02,
    ph_CommunityExpect03,
    ph_RatingComExp01,
    ph_RatingComExp02,
    ph_RatingComExp03
    
  );

  MessageinaBottle -
  page(
    f00930_MessageinaBottle
    
  );

  FeedbackFromtheLastSurvey -
  page(
    D0344_BPASurveyPast,
    D0674_BPASurveyFeedbackOrg,
    D0675_BPASurveyFeedbackMgr,
    D0676_BPASurveyAction,
    D0677_BPASurveyPosImpact
    
  );

  StatisticalGroupings -
  page(
    D0069_Years,
    D0060_Age,
    D0039_EmployStatus,
    D0077_Position
    
  );

  AcknowledgementOfDiversity -
  page(
    D0024_Gender,
    D0793_BornAusYesNo,
    D0794_EnglishFirstYesNo,
    D0220_ATSI,
    D0795_DisabilityYesNo,
    D0739_LGBTI
    
  );

  ThankYouForCompletingTheSurvey -
  page(
    PaidYesNo,
    NameForRelease
    
  );


End Metadata