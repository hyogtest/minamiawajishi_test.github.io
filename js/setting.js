/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'minamiawaji_2014';
OpenSpending.year = '2014';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* minamiawajicofog */
  //議会費
  '20140100': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#935B3B' }, 
  '20140101': { icon: 'icons/bankbook.svg', color: '#C75746', bcolor: '#935B3B' },//議会の報酬に
  '20140102': { icon: 'icons/communication.svg', color: '#C75746', bcolor: '#0AB971' },//議会中継システム設置に
  '20140103': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#0AB971' },//議会広報のために
  '20140104': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#0AB971' },//その他
  
   //総務費
  '20140200': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#0AB971' }, 
  '20140201': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#0AB971' },        //財産管理に  
  '20140202': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#0AB971' },        //まつり補助
  '20140203': { icon: 'icons/bus.svg', color: '#C75746', bcolor: '#0AB971' },        //コミュニティバス運行委託
  '20140204': { icon: 'icons/redevelop.svg', color: '#C75746', bcolor: '#0AB971' },        //新庁舎建設
  '20140205': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#0AB971' },        //大学連携推進に
  '20140206': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#0AB971' },        //地域おこし協力隊
  '20140207': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#0AB971' },        //市民交流センター運営
  '20140208': { icon: 'icons/javni_dug.svg', color: '#C75746', bcolor: '#0AB971' },        //固定資産評価委託
  '20140209': { icon: 'icons/vote.svg', color: '#C75746', bcolor: '#0AB971' },        //農業委員会委員選挙に
  '20140210': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#0AB971' },        //期間統計調査にまつり
  '20140211': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#0AB971' },        //その他


  //民生費
  '20140300': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20140301': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#4E6D00' }, //障害福祉に
  '20140302': { icon: 'icons/old-age.svg', color: '#C75746', bcolor: '#4E6D00' }, //老人福祉に
  '20140303': { icon: 'icons/medical-supplies.svg', color: '#C75746', bcolor: '#4E6D00' }, //福祉医療に
  '20140304': { icon: 'icons/old-age.svg', color: '#C75746', bcolor: '#4E6D00' }, //後期高齢者医療会計繰出
  '20140305': { icon: 'icons/old-age.svg', color: '#C75746', bcolor: '#4E6D00' }, //養護老人ホーム
  '20140306': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#4E6D00' }, //介護保健特別会計繰出
  '20140307': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#4E6D00' }, //国民健康保健特別会計繰出
  '20140308': { icon: 'icons/child.svg', color: '#C75746', bcolor: '#4E6D00' }, //児童手当
  '20140309': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#4E6D00' }, //保育所
  '20140310': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#4E6D00' }, //放課後児童健全育成
  '20140311': { icon: 'icons/c_kosodate_shien.svg', color: '#C75746', bcolor: '#4E6D00' }, //少子化対策
  '20140312': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#4E6D00' }, //生活保護
  '20140313': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#4E6D00' }, //その他

  //衛生費

  '20140400': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#4E6D00' },
  '20140401': { icon: 'icons/medical-supplies.svg', color: '#C75746', bcolor: '#4E6D00' },//予防接種
  '20140402': { icon: 'icons/c_kenkou_fukushi.svg', color: '#C75746', bcolor: '#D33673' },//健康づくり推進
  '20140403': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#D33673' },//妊婦健康診査補助金
  '20140404': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#D33673' },//広域水道企業団補助金
  '20140405': { icon: 'icons/medical-supplies..svg', color: '#C75746', bcolor: '#D33673' },//休日診療所
  '20140406': { icon: 'icons/japanese-money.svg', color: '#C75746', bcolor: '#D33673' },//衛生事務組合負担金
  '20140407': { icon: 'icons/government-uk.svg', color: '#C75746', bcolor: '#D33673' },//ごみ処理費
  '20140408': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#D33673' },//衛生センター管理運営
  '20140409': { icon: 'icons/c_watersup.svg', color: '#C75746', bcolor: '#D33673' },//下水道補助
  '20140410': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#D33673' },//その他

  //労働費

  '20140500': { icon: 'icons/misc-services.svg', color: '#C75746', bcolor: '#D33673' },
  '20140501': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#D33673' },//緊急雇用対策
  '20140502': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#D33673' },//働く婦人の家管理

  //農林水産業費

  '20140600': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#2A3A03' },
  '20140601': { icon: 'icons/c_nougyou.svg', color: '#C75746', bcolor: '#2A3A03'  },//農業のために
  '20140602': { icon: 'icons/forestsvg', color: '#C75746', bcolor: '#2A3A03'  },//山のために
  '20140603': { icon: 'icons/fishing.svg', color: '#C75746', bcolor: '#2A3A03'  },//漁業のために
  '20140604': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#2A3A03'  },//その他

  //商工費

  '20140700': { icon: 'icons/c_syoukougyou.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '20140701': { icon: 'icons/payroll.svg', color: '#C75746', bcolor: '#EC2406' },//企業等誘致に
  '20140702': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#EC2406' },//商工会補助金
  '20140703': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#938626' },//淡路瓦屋根工事補助
  '20140704': { icon: 'icons/government_office.svg', color: '#C75746', bcolor: '#938626' },//観光施設改修に
  '20140705': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#938626' },//海水浴場管理に
  '20140706': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#938626' },//その他

  
  //土木費
  '20140800': { icon: 'icons/snow-removal.svg', color: '#C75746', bcolor: '#938626' },
  '20140801': { icon: 'icons/bridge.svg', color: '#C75746', bcolor: '#C75746' },//道路や橋維持に
  '20140802': { icon: 'icons/railways.svg', color: '#C75746', bcolor: '#C75746' },//道路新設や改良に
  '20140803': { icon: 'icons/river.svg', color: '#C75746', bcolor: '#C75746' },//河川維持に
  '20140804': { icon: 'icons/sangyou3.svg', color: '#C75746', bcolor: '#C75746' },//港湾管理に
  '20140805': { icon: 'icons/water.svg', color: '#C75746', bcolor: '#C75746' },//下水道補助に
  '20140806': { icon: 'icons/energy.svg', color: '#C75746', bcolor: '#C75746' },//若人の広場補助に
  '20140807': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#C75746' },//住宅建設に
  '20140808': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#C75746' },//その他

  // 消防費

  '20140900': { icon: 'icons/fire_engine.svg', color: '#C75746', bcolor: '#C75746' },//
  '20140901': { icon: 'icons/c_shyoubou.svg', color: '#C75746', bcolor: '#C75746' },//消防のために
  '20140902': { icon: 'icons/c_bousai.svg', color: '#C75746', bcolor: '#D33673' },//災害対策に
  '20140903': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#D33673' },//その他

  //教育費

  '20141000': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '20141001': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#790586' },//小・中学校運営に
 '20141002': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#790586' },//人権教育推進に
 '20141003': { icon: 'icons/social-systems.svg', color: '#C75746', bcolor: '#790586' },//給食センター運営に
 '20141004': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#790586' },//その他

 //災害復旧費
 
 '20141100': { icon: 'icons/euro.svg', color: '#C75746', bcolor: '#790586' },//
 '20141101': { icon: 'icons/euro.svg', color: '#C75746', bcolor: '#790586' },//農施設の復旧等に

 //公債費
 '20141200': { icon: 'icons/transfers.svg', color: '#C75746', bcolor: '#790586' },//
 '20141201': { icon: 'icons/transfers.svg', color: '#C75746', bcolor: '#790586' },//返済に

 //諸支出金
 '20141300': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' },//
 '20141301': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#790586' },//諸支出金に
 //予備費
 '20141400': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#790586' },//予備費
 '20141401': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#790586' },//
};


