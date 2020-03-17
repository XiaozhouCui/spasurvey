Metadata(en-AU, Question, Label)
  'Metadata VBScript file for [BPA, Test Survey]
  HDATA -
  [
    TemplateLocation = "FULL_MODULE_SUIT_files",
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

  D0347_Intention_list - define
  { 
    _1  "< 1 yr" [ Value = "1" ],
    _2  "1 - 2 yrs" [ Value = "2" ],
    _3  "3 - 5 yrs" [ Value = "3" ],
    _4  "6 - 10 yrs " [ Value = "4" ],
    _5  "> 10 yrs" [ Value = "5" ],
    _6  "Not sure" [ Value = "6" ],
    _998  "Prefer not to say" [ Value = "998" ],
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

  Scale1to6AgreeNK - define
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
    _1  "Position 1" [ Value = "1" ],
    _2  "Position 2" [ Value = "2" ],
    _3  "Position 3" [ Value = "3" ],
    _4  "Position 4" [ Value = "4" ],
    _5  "Position 5" [ Value = "5" ],
    _6  "Position 6" [ Value = "6" ],
    _998  "Prefer not to say" [ Value = "998" ],
    _999 - [ Value = "999" ] NA
  };

  D0024_Gender_other_specify - define
  { 
    _1  "Man" [ Value = "1" ],
    _2  "Woman" [ Value = "2" ],
    _3  "Transgender man" [ Value = "3" ],
    _4  "Transgender woman" [ Value = "4" ],
    _5  "Non-Binary" [ Value = "5" ],
    _6  "Prefer to self describe in another way" [ Value = "6" ],
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

  Scale1to3Integrity - define
  { 
    _1 - [ Value = "1" ],
    _2 - [ Value = "2" ],
    _3 - [ Value = "3" ],
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
    _1  "Position 1" [ Value = "1" ],
    _2  "Position 2" [ Value = "2" ],
    _3  "Position 3" [ Value = "3" ],
    _4  "Position 4" [ Value = "4" ],
    _5  "Position 5" [ Value = "5" ],
    _6  "Position 6" [ Value = "6" ],
    _7  "Position 7" [ Value = "7" ],
    _8  "Position 8" [ Value = "8" ],
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

  YesNotSureNoNotEmployed - define
  { 
    _1 - [ Value = "1" ],
    _2 - [ Value = "2" ],
    _3 - [ Value = "3" ],
    _4 - [ Value = "4" ],
    _999 - [ Value = "999" ] NA
  };

  Message_2ndChoice_list - define
  { 
    _1  "Name<br/><em> – Position Description</em>" [ Value = "1" ],
    _2  "Name<br/><em> – Position Description</em>" [ Value = "2" ],
    _3  "Name<br/><em> – Position Description</em>" [ Value = "3" ],
    _4  "Name<br/><em> – Position Description</em>" [ Value = "4" ],
    _5  "Name<br/><em> – Position Description</em>" [ Value = "5" ],
    _6  "Name<br/><em> – Position Description</em>" [ Value = "6" ],
    _999 - [ Value = "999" ] NA
  };

  Scale1to3Issues - define
  { 
    _1 - [ Value = "1" ],
    _2 - [ Value = "2" ],
    _3 - [ Value = "3" ],
    _999 - [ Value = "999" ] NA
  };

  YesNoVertical - define
  { 
    _1  "Yes" [ Value = "1" ],
    _2  "No" [ Value = "2" ],
    _999 - [ Value = "999" ] NA
  };

  Scale1to3 - define
  { 
    _1 - [ Value = "1" ],
    _2 - [ Value = "2" ],
    _3 - [ Value = "3" ],
    _999 - [ Value = "999" ] NA
  };

  Scale1to4 - define
  { 
    _1 - [ Value = "1" ],
    _2 - [ Value = "2" ],
    _3 - [ Value = "3" ],
    _4 - [ Value = "4" ],
    _999 - [ Value = "999" ] NA
  };


  '''''''''''''''''''' End shared lists ''''''''''''''''''''

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
  f00616_LeavingOrgnYesNo -  categorical [..1] { use YesNo sublist };
  f00624_StayInOrgn01 - text [..250];
  f00625_StayInOrgn02 - text [..250];
  f00626_StayInOrgn03 - text [..250];
  f00627_LeaveOrgn01 - text [..250];
  f00628_LeaveOrgn02 - text [..250];
  f00629_LeaveOrgn03 - text [..250];
  f00667_IntentionToLeaveReason - text [..250];
  D0347_Intention - style(Orientation = "Column", Columns = "3") categorical [..1] { use D0347_Intention_list sublist };
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
  f21606_ValuesAboveAll - text [..250];
  f00217_QSD01a -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f00218_QSD01b -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f09937_QSD04b -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f06998_QSD09a -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f06999_QSD09b -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f09938_QSD11a -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f09939_QSD11b -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f09940_QSD11c -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f00955_Present01 - text [..250];
  f00956_Present02 - text [..250];
  f00957_Present03 - text [..250];
  f00961_Future01 - text [..250];
  f00962_Future02 - text [..250];
  f00963_Future03 - text [..250];
  f11475_QSD09d_Merger -  categorical [..1] { use Scale1to6AgreeNK sublist };
  f11476_QSD09b_Merger -  categorical [..1] { use Scale1to6AgreeNK sublist };
  f11477_QSD11b_Merger -  categorical [..1] { use Scale1to6AgreeNK sublist };
  f11478_QSD11c_Merger -  categorical [..1] { use Scale1to6AgreeNK sublist };
  f11479_QSD11d_Merger -  categorical [..1] { use Scale1to6AgreeNK sublist };
  f04996_MergeExcited01 - text [..250];
  f04999_MergeConcerned01 - text [..250];
  f05008_MergeMainRetain01 - text [..250];
  D0069_Years - style(Orientation = "Column", Columns = "4") categorical [..1] { use D0069_Years_list sublist };
  D0060_Age - style(Orientation = "Column", Columns = "4") categorical [..1] { use D0060_Age_list sublist };
  D0039_EmployStatus - style(Orientation = "Column", Columns = "4") categorical [..1] { use D0039_EmployStatus_list sublist };
  D0077_Position - style(Orientation = "Column", Columns = "1") categorical [..1] { use D0077_Position_list sublist };
  D0024_Gender - style(Orientation = "Column", Columns = "1") categorical [..1] { use D0024_Gender_other_specify sublist };
  f21930_Gender_Other_Specify - text [..250];
  D0793_BornAusYesNo -  categorical [..1] { use YesNoPreferNotToSay sublist };
  D0794_EnglishFirstYesNo -  categorical [..1] { use YesNoPreferNotToSay sublist };
  D0220_ATSI -  categorical [..1] { use YesNoPreferNotToSay sublist };
  D0795_DisabilityYesNo -  categorical [..1] { use YesNoPreferNotToSay sublist };
  D0739_LGBTI -  categorical [..1] { use YesNoPreferNotToSay sublist };
  f05536_M70Respect -  categorical [..1] { use Scale1to6Agree sublist };
  f05537_M71Honesty -  categorical [..1] { use Scale1to6Agree sublist };
  f05538_M72Fairness -  categorical [..1] { use Scale1to6Agree sublist };
  f05539_M73Equality -  categorical [..1] { use Scale1to6Agree sublist };
  f05545_M79StdBehaviour -  categorical [..1] { use Scale1to6Agree sublist };
  f05546_M80StdWork -  categorical [..1] { use Scale1to6Agree sublist };
  f05547_M81StdService -  categorical [..1] { use Scale1to6Agree sublist };
  f37787_M82StdAccountability -  categorical [..1] { use Scale1to6Agree sublist };
  f05339_Integrity15Understanding -  categorical [..1] { use Scale1to3Integrity sublist };
  f05332_Integrity08Equitable -  categorical [..1] { use Scale1to3Integrity sublist };
  f05334_Integrity10Interference -  categorical [..1] { use Scale1to3Integrity sublist };
  f05331_Integrity07Economical -  categorical [..1] { use Scale1to3Integrity sublist };
  f05326_Integrity02Computer -  categorical [..1] { use Scale1to3Integrity sublist };
  f09895_Integrity16Honesty -  categorical [..1] { use Scale1to3Integrity sublist };
  f09896_Integrity17Risk -  categorical [..1] { use Scale1to3Integrity sublist };
  f09897_Integrity18Ethics -  categorical [..1] { use Scale1to3Integrity sublist };
  f05335_Integrity11Legal -  categorical [..1] { use Scale1to3Integrity sublist };
  f05329_Integrity05Corrupt -  categorical [..1] { use Scale1to3Integrity sublist };
  f01269_Team01 -  categorical [..1] { use Scale1to6Positive sublist };
  f01270_Team02 -  categorical [..1] { use Scale1to6Positive sublist };
  f01271_Team03 -  categorical [..1] { use Scale1to6Positive sublist };
  f01272_Team04 -  categorical [..1] { use Scale1to6Positive sublist };
  f01273_Team05 -  categorical [..1] { use Scale1to6Positive sublist };
  f01274_Team06 -  categorical [..1] { use Scale1to6Positive sublist };
  f01247_Innovation01 -  categorical [..1] { use Scale1to6Positive sublist };
  f01248_Innovation02 -  categorical [..1] { use Scale1to6Positive sublist };
  f01249_Innovation03 -  categorical [..1] { use Scale1to6Positive sublist };
  f01250_Innovation04 -  categorical [..1] { use Scale1to6Positive sublist };
  f01251_Innovation05 -  categorical [..1] { use Scale1to6Positive sublist };
  f05396_Innovation17 -  categorical [..1] { use Scale1to6Positive sublist };
  f05397_Innovation18 -  categorical [..1] { use Scale1to6Positive sublist };
  f05399_Innovation20 -  categorical [..1] { use Scale1to6Positive sublist };
  f05400_Innovation21 -  categorical [..1] { use Scale1to6Positive sublist };
  f06085_ValueExec01 -  categorical [..1] { use Scale1to6Agree sublist };
  f06086_ValueExec02 -  categorical [..1] { use Scale1to6Agree sublist };
  f06087_ValueExec03 -  categorical [..1] { use Scale1to6Agree sublist };
  f06088_ValueExec04 -  categorical [..1] { use Scale1to6Agree sublist };
  f10369_ValueManager01 -  categorical [..1] { use Scale1to6Agree sublist };
  f10370_ValueManager02 -  categorical [..1] { use Scale1to6Agree sublist };
  f10371_ValueManager03 -  categorical [..1] { use Scale1to6Agree sublist };
  f10372_ValueManager04 -  categorical [..1] { use Scale1to6Agree sublist };
  f01347_ValuePrac01 -  categorical [..1] { use Scale1to6Agree sublist };
  f01348_ValuePrac02 -  categorical [..1] { use Scale1to6Agree sublist };
  f01349_ValuePrac03 -  categorical [..1] { use Scale1to6Agree sublist };
  f01350_ValuePrac04 -  categorical [..1] { use Scale1to6Agree sublist };
  f10493_ValuesDiscuss01 -  categorical [..1] { use Scale1to3YesNotSureNo sublist };
  f10495_ValuesReport01 -  categorical [..1] { use Scale1to3YesNotSureNo sublist };
  f10494_ValuesManaged01 -  categorical [..1] { use Scale1to3YesNotSureNo sublist };
  f01283_Do1 - text [..250];
  f01284_Do2 - text [..250];
  f01285_Do3 - text [..250];
  f01288_Dont1 - text [..250];
  f01289_Dont2 - text [..250];
  f01290_Dont3 - text [..250];
  f04594_Value01Do - text [..250];
  f04596_Value02Do - text [..250];
  f04597_Value03Do - text [..250];
  f04598_Value04Do - text [..250];
  f04595_Value01Dont - text [..250];
  f04599_Value02Dont - text [..250];
  f04600_Value03Dont - text [..250];
  f04601_Value04Dont - text [..250];
  f22336_ValuesNoChange - text [..250];
  f22334_ValuesLess - text [..250];
  f22335_ValuesMore - text [..250];
  f00760_FreeFromBullying -  categorical [..1] { use Scale1to6Agree sublist };
  f00759_FreeFromHarassment -  categorical [..1] { use Scale1to6Agree sublist };
  f19112_FreeFromSexualHarassment -  categorical [..1] { use Scale1to6Agree sublist };
  f05548_M83Favouritism -  categorical [..1] { use Scale1to6Agree sublist };
  f00763_M42Discrimination -  categorical [..1] { use Scale1to6Agree sublist };
  f19109_M104GenderDiscrimination -  categorical [..1] { use Scale1to6Agree sublist };
  f21690_BullyHarassConcern01 -  categorical [..1] { use Scale1to3YesNotSureNo sublist };
  f10275_FavouritismConcern01 -  categorical [..1] { use Scale1to3YesNotSureNo sublist };
  f19110_DiscriminationConcern01 -  categorical [..1] { use Scale1to3YesNotSureNo sublist };
  f21691_BullyHarassExample01 - text [..500];
  f10276_FavouritismExample01 - text [..500];
  f19111_DiscriminationExample01 - text [..500];
  f00910_SafeWork -  categorical [..1] { use YesNo sublist };
  f04450_SafeWorkNo - text [..500];
  f00912_RatingSafeRaise01 -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f00913_RatingSafeRaise02 -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f00914_RatingSafeRaise03 -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f00915_RatingSafeRaise04 -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f05550_RatingSafeRaise08 -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f00919_RatingSafeReport01 -  categorical [..1] { use Scale1to6Agree sublist };
  f00920_RatingSafeReport02 -  categorical [..1] { use Scale1to6Agree sublist };
  f00921_RatingSafeReport03 -  categorical [..1] { use Scale1to6Agree sublist };
  f00922_RatingSafeSystem01 -  categorical [..1] { use Scale1to6Agree sublist };
  f00923_RatingSafeSystem02 -  categorical [..1] { use Scale1to6Agree sublist };
  f00924_RatingSafeSystem03 -  categorical [..1] { use Scale1to6Agree sublist };
  f05574_OrgnWorkplaceSafety01 -  categorical [..1] { use Scale1to6Positive sublist };
  f05578_OrgnWorkplaceSafety05 -  categorical [..1] { use Scale1to6Positive sublist };
  f05580_OrgnWorkplaceSafety07 -  categorical [..1] { use Scale1to6Positive sublist };
  f05581_OrgnWorkplaceSafety08 -  categorical [..1] { use Scale1to6Positive sublist };
  f05582_OrgnWorkplaceSafety09 -  categorical [..1] { use Scale1to6Positive sublist };
  f05575_OrgnWorkplaceSafety02 -  categorical [..1] { use Scale1to6Positive sublist };
  f05579_OrgnWorkplaceSafety06 -  categorical [..1] { use Scale1to6Positive sublist };
  f05576_OrgnWorkplaceSafety03 -  categorical [..1] { use Scale1to6Positive sublist };
  f05577_OrgnWorkplaceSafety04 -  categorical [..1] { use Scale1to6Positive sublist };
  f00835_BullyingByPatients -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f00836_BullyingByRelatives -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f00838_BullyingByManager -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f05782_BullyingByStaff -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f00837_BullyingByCoworkers -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f00844_BullyingByExecutive -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f04445_BullyingByStaffOther -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f09936_BullyingBySuppliers -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f09816_ReportBullyHarass -  categorical [..1] { use Scale1to6Agree sublist };
  f09817_KnowRptBullyHarass -  categorical [..1] { use Scale1to6Agree sublist };
  f09818_TrustRptBullyHarass -  categorical [..1] { use Scale1to6Agree sublist };
  f05779_BullyImprove05 -  categorical [..1] { use Scale1to6Agree sublist };
  f04447_BullyImprove02 -  categorical [..1] { use Scale1to6Agree sublist };
  f04448_BullyImprove03 -  categorical [..1] { use Scale1to6Agree sublist };
  f04449_BullyImprove04 -  categorical [..1] { use Scale1to6Agree sublist };
  f05780_BullyImprove06 -  categorical [..1] { use Scale1to6Agree sublist };
  f36851_OccViolence_Clients -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f36852_OccViolence_Relatives -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f36854_OccViolence_Public -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f00795_AbuseByPatients -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f00796_AbuseByRelatives -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f37792_AbuseByPublic -  categorical [..1] { use Scale1to6AgreeNA sublist };
  f36861_ReportOccViolence -  categorical [..1] { use Scale1to6Agree sublist };
  f36862_KnowRptOccViolence -  categorical [..1] { use Scale1to6Agree sublist };
  f36863_TrustRptOccViolence -  categorical [..1] { use Scale1to6Agree sublist };
  f36855_OccViolImprove01 -  categorical [..1] { use Scale1to6Agree sublist };
  f36856_OccViolImprove02 -  categorical [..1] { use Scale1to6Agree sublist };
  f36857_OccViolImprove03 -  categorical [..1] { use Scale1to6Agree sublist };
  f36858_OccViolImprove04 -  categorical [..1] { use Scale1to6Agree sublist };
  f36859_OccViolImprove05 -  categorical [..1] { use Scale1to6Agree sublist };
  f36860_OccViolImprove06 -  categorical [..1] { use Scale1to6Agree sublist };
  D0111_Manager - style(Orientation = "Column", Columns = "1") categorical [..1] { use D0111_Manager_list sublist };
  f00716_LeadershipStyle01 - text [..250];
  f00717_LeadershipStyle02 - text [..250];
  f00718_LeadershipStyle03 - text [..250];
  f05542_M76Trustworthy -  categorical [..1] { use Scale1to6Agree sublist };
  f37812_M137Friendly -  categorical [..1] { use Scale1to6Agree sublist };
  f37811_M136Dedicated -  categorical [..1] { use Scale1to6Agree sublist };
  f37813_M138Hardworking -  categorical [..1] { use Scale1to6Agree sublist };
  f05541_M75Professional -  categorical [..1] { use Scale1to6Agree sublist };
  f05540_M74Competent -  categorical [..1] { use Scale1to6Agree sublist };
  f37799_M120Fair -  categorical [..1] { use Scale1to6Agree sublist };
  f37800_M121Inclusive -  categorical [..1] { use Scale1to6Agree sublist };
  f37798_M122Decisive -  categorical [..1] { use Scale1to6Agree sublist };
  f37793_M123Consistent -  categorical [..1] { use Scale1to6Agree sublist };
  f37794_M124Flexible -  categorical [..1] { use Scale1to6Agree sublist };
  f37795_M125Proactive -  categorical [..1] { use Scale1to6Agree sublist };
  f37796_M126Visionary -  categorical [..1] { use Scale1to6Agree sublist };
  f37797_M127LeadByExample -  categorical [..1] { use Scale1to6Agree sublist };
  f05544_M78Communicator -  categorical [..1] { use Scale1to6Agree sublist };
  f37809_M128Inspirational -  categorical [..1] { use Scale1to6Agree sublist };
  f05543_M77Supportive -  categorical [..1] { use Scale1to6Agree sublist };
  f37810_M129Approachable -  categorical [..1] { use Scale1to6Agree sublist };
  f37808_M130Encouraging -  categorical [..1] { use Scale1to6Agree sublist };
  f37801_M131Empowering -  categorical [..1] { use Scale1to6Agree sublist };
  f37802_M132Understanding -  categorical [..1] { use Scale1to6Agree sublist };
  f37803_M133Helpful -  categorical [..1] { use Scale1to6Agree sublist };
  f37804_M134Team -  categorical [..1] { use Scale1to6Agree sublist };
  f37805_M135Listens -  categorical [..1] { use Scale1to6Agree sublist };
  f10635_M99Accessible -  categorical [..1] { use Scale1to6Agree sublist };
  f10633_M98Responsive -  categorical [..1] { use Scale1to6Agree sublist };
  f00533_ExpectationMgr01 - text [..250];
  f00534_ExpectationMgr02 - text [..250];
  f00535_ExpectationMgr03 - text [..250];
  f00536_RatingMgr01 -  categorical [..1] { use Scale1to6Agree sublist };
  f00537_RatingMgr02 -  categorical [..1] { use Scale1to6Agree sublist };
  f00538_RatingMgr03 -  categorical [..1] { use Scale1to6Agree sublist };
  f00555_MgrPriorityExpectation01 - text [..250];
  f00556_MgrPriorityExpectation02 - text [..250];
  f00557_MgrPriorityExpectation03 - text [..250];
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
  f00930_MessageinaBottle - text [..1000];
  D0344_BPASurveyPast -  categorical [..1] { use YesNotSureNoNotEmployed sublist };
  D1043_BPASurveyProvider -  categorical [..1] { use YesNotSureNoNotEmployed sublist };
  D0674_BPASurveyFeedbackOrg -  categorical [..1] { use YesNotSureNoNotEmployed sublist };
  D0675_BPASurveyFeedbackMgr -  categorical [..1] { use YesNotSureNoNotEmployed sublist };
  D1044_BPASurveyAccurate -  categorical [..1] { use YesNotSureNoNotEmployed sublist };
  D1045_BPASurveyTimely -  categorical [..1] { use YesNotSureNoNotEmployed sublist };
  D1046_BPASurveyActionOriented -  categorical [..1] { use YesNotSureNoNotEmployed sublist };
  D0676_BPASurveyAction -  categorical [..1] { use YesNotSureNoNotEmployed sublist };
  D0677_BPASurveyPosImpact -  categorical [..1] { use YesNotSureNoNotEmployed sublist };
  Message_2ndChoice - style(Orientation = "Column", Columns = "3") categorical [..1] { use Message_2ndChoice_list sublist };
  f00931_MessageinaBottle2nd - text [..1000];
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
  f05405_Issues04 -  categorical [..1] { use Scale1to3Issues sublist };
  f05402_Issues01 -  categorical [..1] { use Scale1to3Issues sublist };
  f05417_Issues16 -  categorical [..1] { use Scale1to3Issues sublist };
  f10637_Issues37 -  categorical [..1] { use Scale1to3Issues sublist };
  f05411_Issues10 -  categorical [..1] { use Scale1to3Issues sublist };
  f05412_Issues11 -  categorical [..1] { use Scale1to3Issues sublist };
  f05416_Issues15 -  categorical [..1] { use Scale1to3Issues sublist };
  f10638_Issues38 -  categorical [..1] { use Scale1to3Issues sublist };
  f11093_Issues40 -  categorical [..1] { use Scale1to3Issues sublist };
  f21692_Issues45 -  categorical [..1] { use Scale1to3Issues sublist };
  f05408_Issues07 -  categorical [..1] { use Scale1to3Issues sublist };
  f05419_Issues18 -  categorical [..1] { use Scale1to3Issues sublist };
  f05423_Issues22 -  categorical [..1] { use Scale1to3Issues sublist };
  f05428_Issues27 -  categorical [..1] { use Scale1to3Issues sublist };
  f05418_Issues17 -  categorical [..1] { use Scale1to3Issues sublist };
  f05430_Issues29 -  categorical [..1] { use Scale1to3Issues sublist };
  f37299_InitiativeAware01 - style(Orientation = "Column", Columns = "1") categorical [..1] { use YesNoVertical sublist };
  f37300_InitiativeProgress01 -  categorical [..1] { use Scale1to3 sublist };
  f37301_InitiativeAware02 - style(Orientation = "Column", Columns = "1") categorical [..1] { use YesNoVertical sublist };
  f37302_InitiativeProgress02 -  categorical [..1] { use Scale1to3 sublist };
  f37303_InitiativeAware03 - style(Orientation = "Column", Columns = "1") categorical [..1] { use YesNoVertical sublist };
  f37304_InitiativeProgress03 -  categorical [..1] { use Scale1to3 sublist };
  f37305_InitiativeAware04 - style(Orientation = "Column", Columns = "1") categorical [..1] { use YesNoVertical sublist };
  f37306_InitiativeProgress04 -  categorical [..1] { use Scale1to3 sublist };
  f37307_InitiativeAware05 - style(Orientation = "Column", Columns = "1") categorical [..1] { use YesNoVertical sublist };
  f37308_InitiativeProgress05 -  categorical [..1] { use Scale1to3 sublist };
  f10810_QSD12 -  categorical [..1] { use Scale1to6Agree sublist };
  f01254_Innovation08 -  categorical [..1] { use Scale1to6Agree sublist };
  f10811_QSD13 -  categorical [..1] { use Scale1to6Agree sublist };
  f10812_QSD14 -  categorical [..1] { use Scale1to6Agree sublist };
  f10813_QSD15a -  categorical [..1] { use Scale1to6Agree sublist };
  f10814_QSD15b -  categorical [..1] { use Scale1to6Agree sublist };
  f10815_QSD15c -  categorical [..1] { use Scale1to6Agree sublist };
  f22326_QSD15e -  categorical [..1] { use Scale1to6Agree sublist };
  f10816_QSD15d -  categorical [..1] { use Scale1to6Agree sublist };
  f14938_QSD17 -  categorical [..1] { use Scale1to6Agree sublist };
  f14937_QSD16 -  categorical [..1] { use Scale1to6Agree sublist };
  f05086_ChallengeExcited01 - text [..250];
  f05089_ChallengeConcerned01 - text [..250];
  f01255_Innovation09 -  categorical [..1] { use Scale1to6Positive sublist };
  f04459_SigImprove -  categorical [..1] { use Scale1to6Positive sublist };
  f00971_Improvement01 - text [..250];
  f00974_Deteriorated01 - text [..250];
  f00186_Q16a -  categorical [..1] { use Scale1to6Agree sublist };
  f00187_Q16b -  categorical [..1] { use Scale1to6Agree sublist };
  f00188_Q16aMgr -  categorical [..1] { use Scale1to6Agree sublist };
  f00189_Q16bMgr -  categorical [..1] { use Scale1to6Agree sublist };
  f00208_Q58a -  categorical [..1] { use Scale1to6Agree sublist };
  f00209_Q58b -  categorical [..1] { use Scale1to6Agree sublist };
  f00201_Q46a -  categorical [..1] { use Scale1to6Agree sublist };
  f00204_Q46b -  categorical [..1] { use Scale1to6Agree sublist };
  f18965_Transition25 -  categorical [..1] { use Scale1to6Agree sublist };
  f19264_Transition38 -  categorical [..1] { use Scale1to6Agree sublist };
  f11445_Transition03 -  categorical [..1] { use Scale1to6Agree sublist };
  f11447_Transition05 -  categorical [..1] { use Scale1to6Agree sublist };
  f11448_Transition06 -  categorical [..1] { use Scale1to6Agree sublist };
  f11449_Transition07 -  categorical [..1] { use Scale1to6Agree sublist };
  f11450_Transition08 -  categorical [..1] { use Scale1to6Agree sublist };
  f19263_Transition39 -  categorical [..1] { use Scale1to6Agree sublist };
  f18974_Transition26 -  categorical [..1] { use Scale1to6Agree sublist };
  f11642_Transition23 -  categorical [..1] { use Scale1to6Agree sublist };
  f11643_Transition24 -  categorical [..1] { use Scale1to6Agree sublist };
  f18972_Transition28 -  categorical [..1] { use Scale1to6Agree sublist };
  f11456_Transition14 -  categorical [..1] { use Scale1to6Agree sublist };
  f11461_Transition19 -  categorical [..1] { use Scale1to6Agree sublist };
  f11462_Transition20 -  categorical [..1] { use Scale1to6Agree sublist };
  f11463_Transition21 -  categorical [..1] { use Scale1to6Agree sublist };
  f11578_OrgnNoChange01 - text [..250];
  f11581_OrgnLess01 - text [..250];
  f11584_OrgnMore01 - text [..250];
  f00572_ExpectationClient01 - text [..250];
  f00573_ExpectationClient02 - text [..250];
  f00574_ExpectationClient03 - text [..250];
  f00575_RatingClient01 -  categorical [..1] { use Scale1to6Agree sublist };
  f00576_RatingClient02 -  categorical [..1] { use Scale1to6Agree sublist };
  f00577_RatingClient03 -  categorical [..1] { use Scale1to6Agree sublist };
  f00166_Q3aExecCommitted -  categorical [..1] { use Scale1to6Agree sublist };
  f00167_Q3bExecWantFeedback -  categorical [..1] { use Scale1to6Agree sublist };
  f00164_Q2aDefinedService -  categorical [..1] { use Scale1to6Agree sublist };
  f00165_Q2bEmployeesUnderstand -  categorical [..1] { use Scale1to6Agree sublist };
  f00175_Q6aStaffingAdequate -  categorical [..1] { use Scale1to6Agree sublist };
  f00176_Q6bMeetsClientExpectations -  categorical [..1] { use Scale1to6Agree sublist };
  f00197_Q43bRightFirstTime -  categorical [..1] { use Scale1to6Agree sublist };
  f00196_Q43aErrorFree -  categorical [..1] { use Scale1to6Agree sublist };
  f11573_ClientFrustration01 - text [..500];
  f10802_ClientAbusePhysical -  categorical [..1] { use Scale1to4 sublist };
  f11563_ClientAbuseSexual -  categorical [..1] { use Scale1to4 sublist };
  f10796_ClientAbuseEmotional -  categorical [..1] { use Scale1to4 sublist };
  f10797_ClientAbuseFinancial -  categorical [..1] { use Scale1to4 sublist };
  f10801_ClientAbuseNeglect -  categorical [..1] { use Scale1to4 sublist };
  f36926_ClientAbuseStaffBehaviour -  categorical [..1] { use Scale1to4 sublist };
  f36927_ClientAbuseOther -  categorical [..1] { use Scale1to4 sublist };
  f36928_ClientAbusePhysicalEvents - text [..500];
  f36929_ClientAbuseSexuallEvents - text [..500];
  f36930_ClientAbuseEmotionalEvents - text [..500];
  f36931_ClientAbuseFinancialEvents - text [..500];
  f36932_ClientAbuseNeglectEvents - text [..500];
  f36934_ClientAbuseStaffBehaviourEvents - text [..500];
  f36935_ClientAbuseOtherEvents - text [..500];
  f10798_ClientAbuseM50a -  categorical [..1] { use Scale1to6Agree sublist };
  f10799_ClientAbuseM51a -  categorical [..1] { use Scale1to6Agree sublist };
  f10800_ClientAbuseM52a -  categorical [..1] { use Scale1to6Agree sublist };
  f10803_ClientAbuseImprove01 -  categorical [..1] { use Scale1to6AgreeNK sublist };
  f10804_ClientAbuseImprove02 -  categorical [..1] { use Scale1to6AgreeNK sublist };
  f10805_ClientAbuseImprove03 -  categorical [..1] { use Scale1to6AgreeNK sublist };
  f10806_ClientAbuseImprove04 -  categorical [..1] { use Scale1to6AgreeNK sublist };
  f10807_ClientAbuseImprove05 -  categorical [..1] { use Scale1to6AgreeNK sublist };
  f06116_WorkUnitPtSafety01 -  categorical [..1] { use Scale1to6Positive sublist };
  f06117_WorkUnitPtSafety02 -  categorical [..1] { use Scale1to6Positive sublist };
  f06120_WorkUnitPtSafety05 -  categorical [..1] { use Scale1to6Positive sublist };
  f11224_WorkUnitPtSafety11 -  categorical [..1] { use Scale1to6Positive sublist };
  f11225_WorkUnitPtSafety12 -  categorical [..1] { use Scale1to6Positive sublist };
  f11226_WorkUnitPtSafety13 -  categorical [..1] { use Scale1to6Positive sublist };
  f11219_Innovation17PtSafety -  categorical [..1] { use Scale1to6Positive sublist };
  f11220_Innovation18PtSafety -  categorical [..1] { use Scale1to6Positive sublist };
  f11221_Innovation19PtSafety -  categorical [..1] { use Scale1to6Positive sublist };
  f11222_Innovation20PtSafety -  categorical [..1] { use Scale1to6Positive sublist };
  f11223_Innovation21PtSafety -  categorical [..1] { use Scale1to6Positive sublist };
  f14764_Innovation22PtSafety -  categorical [..1] { use Scale1to6Positive sublist };
  f14763_Innovation23PtSafety -  categorical [..1] { use Scale1to6Positive sublist };

  '''''''''''''''''''' End_Survey ''''''''''''''''''''



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
    f00616_LeavingOrgnYesNo,
    f00624_StayInOrgn01,
    f00625_StayInOrgn02,
    f00626_StayInOrgn03,
    f00627_LeaveOrgn01,
    f00628_LeaveOrgn02,
    f00629_LeaveOrgn03,
    f00667_IntentionToLeaveReason,
    D0347_Intention,
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
    f37816_ProudOfOrg,
    f21606_ValuesAboveAll,
    f00217_QSD01a,
    f00218_QSD01b,
    f09937_QSD04b,
    f06998_QSD09a,
    f06999_QSD09b,
    f09938_QSD11a,
    f09939_QSD11b,
    f09940_QSD11c,
    f00955_Present01,
    f00956_Present02,
    f00957_Present03,
    f00961_Future01,
    f00962_Future02,
    f00963_Future03,
    f11475_QSD09d_Merger,
    f11476_QSD09b_Merger,
    f11477_QSD11b_Merger,
    f11478_QSD11c_Merger,
    f11479_QSD11d_Merger,
    f04996_MergeExcited01,
    f04999_MergeConcerned01,
    f05008_MergeMainRetain01,
    D0069_Years,
    D0060_Age,
    D0039_EmployStatus,
    D0077_Position,
    D0024_Gender,
    f21930_Gender_Other_Specify,
    D0793_BornAusYesNo,
    D0794_EnglishFirstYesNo,
    D0220_ATSI,
    D0795_DisabilityYesNo,
    D0739_LGBTI,
    f05536_M70Respect,
    f05537_M71Honesty,
    f05538_M72Fairness,
    f05539_M73Equality,
    f05545_M79StdBehaviour,
    f05546_M80StdWork,
    f05547_M81StdService,
    f37787_M82StdAccountability,
    f05339_Integrity15Understanding,
    f05332_Integrity08Equitable,
    f05334_Integrity10Interference,
    f05331_Integrity07Economical,
    f05326_Integrity02Computer,
    f09895_Integrity16Honesty,
    f09896_Integrity17Risk,
    f09897_Integrity18Ethics,
    f05335_Integrity11Legal,
    f05329_Integrity05Corrupt,
    f01269_Team01,
    f01270_Team02,
    f01271_Team03,
    f01272_Team04,
    f01273_Team05,
    f01274_Team06,
    f01247_Innovation01,
    f01248_Innovation02,
    f01249_Innovation03,
    f01250_Innovation04,
    f01251_Innovation05,
    f05396_Innovation17,
    f05397_Innovation18,
    f05399_Innovation20,
    f05400_Innovation21,
    f06085_ValueExec01,
    f06086_ValueExec02,
    f06087_ValueExec03,
    f06088_ValueExec04,
    f10369_ValueManager01,
    f10370_ValueManager02,
    f10371_ValueManager03,
    f10372_ValueManager04,
    f01347_ValuePrac01,
    f01348_ValuePrac02,
    f01349_ValuePrac03,
    f01350_ValuePrac04,
    f10493_ValuesDiscuss01,
    f10495_ValuesReport01,
    f10494_ValuesManaged01,
    f01283_Do1,
    f01284_Do2,
    f01285_Do3,
    f01288_Dont1,
    f01289_Dont2,
    f01290_Dont3,
    f04594_Value01Do,
    f04596_Value02Do,
    f04597_Value03Do,
    f04598_Value04Do,
    f04595_Value01Dont,
    f04599_Value02Dont,
    f04600_Value03Dont,
    f04601_Value04Dont,
    f22336_ValuesNoChange,
    f22334_ValuesLess,
    f22335_ValuesMore,
    f00760_FreeFromBullying,
    f00759_FreeFromHarassment,
    f19112_FreeFromSexualHarassment,
    f05548_M83Favouritism,
    f00763_M42Discrimination,
    f19109_M104GenderDiscrimination,
    f21690_BullyHarassConcern01,
    f10275_FavouritismConcern01,
    f19110_DiscriminationConcern01,
    f21691_BullyHarassExample01,
    f10276_FavouritismExample01,
    f19111_DiscriminationExample01,
    f00910_SafeWork,
    f04450_SafeWorkNo,
    f00912_RatingSafeRaise01,
    f00913_RatingSafeRaise02,
    f00914_RatingSafeRaise03,
    f00915_RatingSafeRaise04,
    f05550_RatingSafeRaise08,
    f00919_RatingSafeReport01,
    f00920_RatingSafeReport02,
    f00921_RatingSafeReport03,
    f00922_RatingSafeSystem01,
    f00923_RatingSafeSystem02,
    f00924_RatingSafeSystem03,
    f05574_OrgnWorkplaceSafety01,
    f05578_OrgnWorkplaceSafety05,
    f05580_OrgnWorkplaceSafety07,
    f05581_OrgnWorkplaceSafety08,
    f05582_OrgnWorkplaceSafety09,
    f05575_OrgnWorkplaceSafety02,
    f05579_OrgnWorkplaceSafety06,
    f05576_OrgnWorkplaceSafety03,
    f05577_OrgnWorkplaceSafety04,
    f00835_BullyingByPatients,
    f00836_BullyingByRelatives,
    f00838_BullyingByManager,
    f05782_BullyingByStaff,
    f00837_BullyingByCoworkers,
    f00844_BullyingByExecutive,
    f04445_BullyingByStaffOther,
    f09936_BullyingBySuppliers,
    f09816_ReportBullyHarass,
    f09817_KnowRptBullyHarass,
    f09818_TrustRptBullyHarass,
    f05779_BullyImprove05,
    f04447_BullyImprove02,
    f04448_BullyImprove03,
    f04449_BullyImprove04,
    f05780_BullyImprove06,
    f36851_OccViolence_Clients,
    f36852_OccViolence_Relatives,
    f36854_OccViolence_Public,
    f00795_AbuseByPatients,
    f00796_AbuseByRelatives,
    f37792_AbuseByPublic,
    f36861_ReportOccViolence,
    f36862_KnowRptOccViolence,
    f36863_TrustRptOccViolence,
    f36855_OccViolImprove01,
    f36856_OccViolImprove02,
    f36857_OccViolImprove03,
    f36858_OccViolImprove04,
    f36859_OccViolImprove05,
    f36860_OccViolImprove06,
    D0111_Manager,
    f00716_LeadershipStyle01,
    f00717_LeadershipStyle02,
    f00718_LeadershipStyle03,
    f05542_M76Trustworthy,
    f37812_M137Friendly,
    f37811_M136Dedicated,
    f37813_M138Hardworking,
    f05541_M75Professional,
    f05540_M74Competent,
    f37799_M120Fair,
    f37800_M121Inclusive,
    f37798_M122Decisive,
    f37793_M123Consistent,
    f37794_M124Flexible,
    f37795_M125Proactive,
    f37796_M126Visionary,
    f37797_M127LeadByExample,
    f05544_M78Communicator,
    f37809_M128Inspirational,
    f05543_M77Supportive,
    f37810_M129Approachable,
    f37808_M130Encouraging,
    f37801_M131Empowering,
    f37802_M132Understanding,
    f37803_M133Helpful,
    f37804_M134Team,
    f37805_M135Listens,
    f10635_M99Accessible,
    f10633_M98Responsive,
    f00533_ExpectationMgr01,
    f00534_ExpectationMgr02,
    f00535_ExpectationMgr03,
    f00536_RatingMgr01,
    f00537_RatingMgr02,
    f00538_RatingMgr03,
    f00555_MgrPriorityExpectation01,
    f00556_MgrPriorityExpectation02,
    f00557_MgrPriorityExpectation03,
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
    f00071_Coach12a,
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
    f00865_Lead39,
    f00930_MessageinaBottle,
    D0344_BPASurveyPast,
    D1043_BPASurveyProvider,
    D0674_BPASurveyFeedbackOrg,
    D0675_BPASurveyFeedbackMgr,
    D1044_BPASurveyAccurate,
    D1045_BPASurveyTimely,
    D1046_BPASurveyActionOriented,
    D0676_BPASurveyAction,
    D0677_BPASurveyPosImpact,
    Message_2ndChoice,
    f00931_MessageinaBottle2nd,
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
    f05405_Issues04,
    f05402_Issues01,
    f05417_Issues16,
    f10637_Issues37,
    f05411_Issues10,
    f05412_Issues11,
    f05416_Issues15,
    f10638_Issues38,
    f11093_Issues40,
    f21692_Issues45,
    f05408_Issues07,
    f05419_Issues18,
    f05423_Issues22,
    f05428_Issues27,
    f05418_Issues17,
    f05430_Issues29,
    f37299_InitiativeAware01,
    f37300_InitiativeProgress01,
    f37301_InitiativeAware02,
    f37302_InitiativeProgress02,
    f37303_InitiativeAware03,
    f37304_InitiativeProgress03,
    f37305_InitiativeAware04,
    f37306_InitiativeProgress04,
    f37307_InitiativeAware05,
    f37308_InitiativeProgress05,
    f10810_QSD12,
    f01254_Innovation08,
    f10811_QSD13,
    f10812_QSD14,
    f10813_QSD15a,
    f10814_QSD15b,
    f10815_QSD15c,
    f22326_QSD15e,
    f10816_QSD15d,
    f14938_QSD17,
    f14937_QSD16,
    f05086_ChallengeExcited01,
    f05089_ChallengeConcerned01,
    f01255_Innovation09,
    f04459_SigImprove,
    f00971_Improvement01,
    f00974_Deteriorated01,
    f00186_Q16a,
    f00187_Q16b,
    f00188_Q16aMgr,
    f00189_Q16bMgr,
    f00208_Q58a,
    f00209_Q58b,
    f00201_Q46a,
    f00204_Q46b,
    f18965_Transition25,
    f19264_Transition38,
    f11445_Transition03,
    f11447_Transition05,
    f11448_Transition06,
    f11449_Transition07,
    f11450_Transition08,
    f19263_Transition39,
    f18974_Transition26,
    f11642_Transition23,
    f11643_Transition24,
    f18972_Transition28,
    f11456_Transition14,
    f11461_Transition19,
    f11462_Transition20,
    f11463_Transition21,
    f11578_OrgnNoChange01,
    f11581_OrgnLess01,
    f11584_OrgnMore01,
    f00572_ExpectationClient01,
    f00573_ExpectationClient02,
    f00574_ExpectationClient03,
    f00575_RatingClient01,
    f00576_RatingClient02,
    f00577_RatingClient03,
    f00166_Q3aExecCommitted,
    f00167_Q3bExecWantFeedback,
    f00164_Q2aDefinedService,
    f00165_Q2bEmployeesUnderstand,
    f00175_Q6aStaffingAdequate,
    f00176_Q6bMeetsClientExpectations,
    f00197_Q43bRightFirstTime,
    f00196_Q43aErrorFree,
    f11573_ClientFrustration01,
    f10802_ClientAbusePhysical,
    f11563_ClientAbuseSexual,
    f10796_ClientAbuseEmotional,
    f10797_ClientAbuseFinancial,
    f10801_ClientAbuseNeglect,
    f36926_ClientAbuseStaffBehaviour,
    f36927_ClientAbuseOther,
    f36928_ClientAbusePhysicalEvents,
    f36929_ClientAbuseSexuallEvents,
    f36930_ClientAbuseEmotionalEvents,
    f36931_ClientAbuseFinancialEvents,
    f36932_ClientAbuseNeglectEvents,
    f36934_ClientAbuseStaffBehaviourEvents,
    f36935_ClientAbuseOtherEvents,
    f10798_ClientAbuseM50a,
    f10799_ClientAbuseM51a,
    f10800_ClientAbuseM52a,
    f10803_ClientAbuseImprove01,
    f10804_ClientAbuseImprove02,
    f10805_ClientAbuseImprove03,
    f10806_ClientAbuseImprove04,
    f10807_ClientAbuseImprove05,
    f06116_WorkUnitPtSafety01,
    f06117_WorkUnitPtSafety02,
    f06120_WorkUnitPtSafety05,
    f11224_WorkUnitPtSafety11,
    f11225_WorkUnitPtSafety12,
    f11226_WorkUnitPtSafety13,
    f11219_Innovation17PtSafety,
    f11220_Innovation18PtSafety,
    f11221_Innovation19PtSafety,
    f11222_Innovation20PtSafety,
    f11223_Innovation21PtSafety,
    f14764_Innovation22PtSafety,
    f14763_Innovation23PtSafety
    
  );


End Metadata