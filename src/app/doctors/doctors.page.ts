import { DocmodalPage } from './../modals/docmodal/docmodal.page';
// import { Component,  } from '@angular/core';
import {OnInit, Component, Pipe, NgModule, VERSION} from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {
  filterTerm: string;
  // name: string;
  // phone: string;
  // phone2: string;
  // address: string;
  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

userRecords = [
  {
    name: 'נעים אבו פריחה',
    subject: 'גסטרואנטרולוגיה',
    Assosiation: 'סורוקה',
    Address: 'שדרות יצחק רגר 151',
    City: 'באר שבע',
    Telephone: '086403178'
  },
  {
    name: 'מתן אברהמי',
    subject: 'פסיכיאטריה',
    Assosiation: 'מרכז לבריאות הנפש גהה',
    Address: 'הלסינקי 1',
    City: 'פתח תקווה',
    Telephone: '039258401'
  },
  {
    name: 'איאד אדעיס',
    subject: 'כאב',
    Assosiation: 'שיבא',
    Address: 'דרך שיבא 2',
    City: 'רמת גן',
    Telephone: '0526669218'
  },
  {
    name: 'ראובן אור',
    subject: 'המטולוגיה ואונקולוגיה',
    Assosiation: 'מרכז יום זכרון מנחם',
    Address: 'ליאו ניסן 10',
    City: 'ירושלים',
    Telephone: '02-6400800'
  },
  {
    name: 'חנוך אלרן',
    subject: 'נוירוכירורגיה',
    Assosiation: 'איכילוב',
    Address: 'וייצמן 6',
    City: 'תל אביב',
    Telephone: '03-6973269'
  },
  {
    name: 'סוהיל אעמר',
    subject: 'רפואה פנימית, ראומטולוגיה',
    Assosiation: 'מרכז שלום מאיר',
    Address: 'דיסקין 9',
    City: 'ירושלים',
    Telephone: '02-5636265'
  },
  {
    name: 'אורן באר',
    subject: 'פסיכיאטריה',
    Assosiation: 'מרכז רפואי לבריאות הנפש לב השרון',
    Address: 'השיבולים',
    City: 'צור משה',
    Telephone: '09-8981258'
  },
  {
    name: 'מיכאל בונצל',
    subject: 'פסיכיאטריה',
    Assosiation: 'מרכז רפואי מעיני הישועה',
    Address: 'הרב פוברסקי 17',
    City: 'בני ברק',
    Telephone: '03-5771111'
  },
  {
    name: 'צבי בוקמן',
    subject: 'גריאטריה',
    Assosiation: 'מכבי',
    Address: 'דרך יצחק רבין 2',
    City: 'בית שמש',
    Telephone: '02-9915008'
  },
  {
    name: 'מיכאל בז\'מין',
    subject: 'פסיכיאטריה',
    Assosiation: 'שער מנשה',
    Address: 'כביש 6403',
    City: 'שער מנשה',
    Telephone: '04-6278888'
  },
  {
    name: 'איב ביטון',
    subject: 'פנימית',
    Assosiation: 'מדטריקס',
    Address: 'היצירה 28',
    City: 'רמת גן',
    Telephone: '1-700-508-586'
  },
  {
    name: 'מנחם שלמה בן שחר',
    subject: 'אונקולוגיה',
    Assosiation: 'מכבי',
    Address: 'שדרות בן גוריון 80 א',
    City: 'קרית מוצקין',
    Telephone: '04-8704699'
  },
  {
    name: 'סטיבן ישראל ברגר',
    subject: 'רפואה פנימית וגריאטריה',
    Assosiation: 'מכבי - יחידה לטיפול בית',
    Address: 'בן גוריון 182',
    City: 'גבעתיים',
    Telephone: '03-7515296'
  },
  {
    name: 'סילביו בריל',
    subject: 'כאב',
    Assosiation: 'איכילוב',
    Address: 'ויצמן 6',
    City: 'תל אביב',
    Telephone: '03-6974716'
  },
  {
    name: 'הדסה גולדברג שטרן',
    subject: 'נוירולוגיה',
    Assosiation: 'שניידר (כללית)',
    Address: 'קפלן 14',
    City: 'פתח תקווה',
    Telephone: '03-9253615'
  },
  {
    name: 'עומר גולדשטיין',
    subject: 'גסטרואנטרולוגיה, רפואה פנימית',
    Assosiation: 'בני ציון',
    Address: 'שדרות אליהו גולומב 47',
    City: 'חיפה',
    Telephone: '04-8332070'
  },
  {
    name: 'איתי גור אריה',
    subject: 'כאב',
    Assosiation: 'שיבא תל השומר',
    Address: 'עמק',
    City: 'רמת גן',
    Telephone: '03-5303106'
  },
  {
    name: 'סימונה גלסברג',
    subject: 'פנימית',
    Assosiation: 'הדסה עין כרם',
    Address: '',
    City: 'ירושלים',
    Telephone: '02-6778899'
  },
  {
    name: 'גיל גלעד',
    subject: 'ילדים',
    Assosiation: 'שניידר',
    Address: 'קפלן 14',
    City: 'פתח תקווה',
    Telephone: '03-9253762'
  },
  {
    name: 'ישראל גרינבלט',
    subject: 'גריאטריה',
    Assosiation: 'מכבי',
    Address: 'סוקולוב 22',
    City: 'הרצליה',
    Telephone: '09-9503311'
  },
  {
    name: 'ילנה פולנסקי דהן',
    subject: 'משפחה',
    Assosiation: 'יוספטל',
    Address: '290 שדרות ששת הימים',
    City: 'אילת',
    Telephone: '08-6336555'
  },
  {
    name: 'ד"ר אדריאן דואק',
    subject: 'המטולוגיה / פנימית',
    Assosiation: 'מרפאת "פנדה',
    Address: 'אלי הורוביץ 12',
    City: 'רחובות',
    Telephone: '072-3922095'
  },
  {
    name: 'ברוך אל דניאל',
    subject: 'משפחה',
    Assosiation: 'מאוחדת',
    Address: '',
    City: 'תל אביב',
    Telephone: '03-6919592'
  },
  {
    name: 'ואעל הזייל',
    subject: 'אונקולוגיה',
    Assosiation: 'סורוקה',
    Address: '',
    City: 'באר שבע',
    Telephone: '08-6245000'
  },
  {
    name: 'אייל הירש',
    subject: 'גסטרואנטרולוגיה, רפואה פנימית',
    Assosiation: 'איכילוב',
    Address: 'ויצמן 6',
    City: 'תל אביב',
    Telephone: '03-6974281'
  },
  {
    name: 'דוד סלומון וילנסקי',
    subject: 'רפואת ילדים',
    Assosiation: 'כללית',
    Address: 'דרך בית לחם 75',
    City: 'ירושלים',
    Telephone: '02-5457111'
  },
  {
    name: 'ג\'וסלין זמיר',
    subject: 'משפחה',
    Assosiation: 'מכבי',
    Address: 'שדרות ארלוזורוב 18',
    City: 'עפולה',
    Telephone: '04-6591616'
  },
  {
    name: 'משה זר ציון',
    subject: 'פסיכיאטריה',
    Assosiation: 'אסותא רמת החייל',
    Address: 'הברזל 19',
    City: 'תל אביב',
    Telephone: '03-7644444'
  },
  {
    name: 'ג\'ורג\' חביב',
    subject: 'ראומטולוגיה',
    Assosiation: 'בית חולים אנגלי',
    Address: '',
    City: 'נצרת',
    Telephone: '04-6028888'
  },
  {
    name: 'רפאל יוסף חרותי',
    subject: 'רפואה פיסיקלית ושיקום',
    Assosiation: 'מרכז רפואי שיקומי רעות',
    Address: 'שדרות החי"ל 2',
    City: 'תל אביב',
    Telephone: '03-6893712'
  },
  {
    name: 'ורד חרמוש',
    subject: 'פנימית, גריאטריה',
    Assosiation: 'לניאדו',
    Address: 'דברי חיים 16',
    City: 'נתניה',
    Telephone: '09-8609102'
  },
  {
    name: 'עירית חרמש',
    subject: 'גסטרואנטרולוגיה',
    Assosiation: 'רמב"ם',
    Address: '',
    City: 'חיפה',
    Telephone: '04-7772873'
  },
  {
    name: 'יגאל גוטניק',
    subject: 'פסיכיאטריה של הילד והמתבגר',
    Assosiation: 'הלל יפה',
    Address: '',
    City: 'חדרה',
    Telephone: '054-3030072'
  },
  {
    name: 'שי יגנה',
    subject: 'המטולוגיה',
    Assosiation: 'פוריה',
    Address: 'דב הוז, גליל תחתון',
    City: 'טבריה',
    Telephone: '04-6652291'
  },
  {
    name: 'יעקב גורביץ\'',
    subject: 'פסיכיאטריה',
    Assosiation: 'לאומית',
    Address: 'החרושת 5',
    City: 'כרמיאל',
    Telephone: '052-5832004'
  },
  {
    name: 'אורי יצקר',
    subject: 'פסיכיאטריה',
    Assosiation: 'זיו',
    Address: 'דרך הרמב"ם',
    City: 'צפת',
    Telephone: '04-6828086'
  },
  {
    name: 'תמר ישר',
    subject: 'כאב',
    Assosiation: 'לאומית',
    Address: 'ויצמן 14',
    City: 'תל אביב',
    Telephone: '053-9956139'
  },
  {
    name: 'קרן כהן',
    subject: 'כאב',
    Assosiation: 'שערי צדק',
    Address: 'שמואל בייט 12',
    City: 'ירושלים',
    Telephone: '02-5645189'
  },
  {
    name: 'עובד כהן',
    subject: 'כירורגיה',
    Assosiation: 'רמב"ם',
    Address: 'העלייה השנייה 8',
    City: 'חיפה',
    Telephone: '04-7772631'
  },
  {
    name: 'עופר כספי',
    subject: 'מנהל יחידת הרפואה',
    Assosiation: 'בילינסון',
    Address: 'דרך זאב ז\'בוטינסקי 39',
    City: 'פתח תקווה',
    Telephone: '03-9378055'
  },
  {
    name: 'נתן כספי',
    subject: 'פסיכיאטריה',
    Assosiation: 'בית חולים לב השרון',
    Address: 'השיבולים',
    City: 'צור משה',
    Telephone: '09-8981111'
  },
  {
    name: 'נטליה כץ',
    subject: 'פסיכיאטריה',
    Assosiation: 'בית חולים מעלה הכרמל',
    Address: 'האלה 17',
    City: 'טירת כרמל',
    Telephone: '04-8452269'
  },
  {
    name: 'אלדד כץ',
    subject: 'אורתופדיה',
    Assosiation: '',
    Address: 'בר כוכבא 16',
    City: 'בני ברק',
    Telephone: '03-9226000'
  },
  {
    name: 'נירית כרמי נאוי',
    subject: 'נוירולוגיה',
    Assosiation: 'מכבי',
    Address: 'רבי עקיבא 86',
    City: 'בני ברק',
    Telephone: '03-7462220'
  },
  {
    name: 'שאול לב רן',
    subject: 'פסיכיאטריה',
    Assosiation: 'מרכז רפואי לבריאות הנפש לב השרון',
    Address: 'השיבולים',
    City: 'צור משה',
    Telephone: '09-8981111'
  },
  {
    name: 'אנטולי ליבשיץ',
    subject: 'רפואה פיזיקלית ושיקום',
    Assosiation: 'מרכז רפואי שיקומי רעות',
    Address: 'שדרות החי"ל 2',
    City: 'תל אביב',
    Telephone: '03-5081000'
  },
  {
    name: 'מירב לייבה',
    subject: 'המטולוגיה ורפואה פנימית',
    Assosiation: 'אסותא',
    Address: 'הרפואה 7',
    City: 'אשדוד',
    Telephone: '03-7644944'
  },
  {
    name: 'אורנה לנדאו דה שליט',
    subject: 'כאב',
    Assosiation: 'כללית',
    Address: 'שטרית 6',
    City: 'תל אביב',
    Telephone: '03-6482333'
  },
  {
    name: 'כאמל מחאמיד',
    subject: 'אונקולוגיה',
    Assosiation: 'מרכז רפואי העמק',
    Address: 'שדרות יצחק רבין',
    City: 'עפולה',
    Telephone: '04-6495540'
  },
  {
    name: 'מיכאל מרוביץ',
    subject: 'כירורגיה אורתופדית',
    Assosiation: 'שיבא תל השומר',
    Address: 'דרך שיבא 2',
    City: 'רמת גן',
    Telephone: '03-5303030'
  },
  {
    name: 'מירב לידר',
    subject: 'פנימית וראומטולוגיה',
    Assosiation: 'שיבא תל השומר',
    Address: 'דרך שיבא 2',
    City: 'רמת גן',
    Telephone: '03-5308060'
  },
  {
    name: 'ירון מלמד סנפיר',
    subject: 'כאב',
    Assosiation: 'רמבם',
    Address: 'העלייה השנייה 8',
    City: 'חיפה',
    Telephone: '04-777-2222'
  },
  {
    name: 'דמיטרי מנביץ',
    subject: 'גריאטריה',
    Assosiation: 'בית רבקה (כללית)',
    Address: 'החמישה 4',
    City: 'פתח תקווה',
    Telephone: '03-9373831'
  },
  {
    name: 'הדס משולם',
    subject: 'מחלות עיניים',
    Assosiation: 'הדסה עין כרם',
    Address: '',
    City: 'ירושלים',
    Telephone: '02-6776397'
  },
  {
    name: 'נעמי מתיב',
    subject: 'רפואה פנימית וגריאטריה',
    Assosiation: 'המרכז הרפואי לגליל',
    Address: '',
    City: 'נהריה',
    Telephone: '04-9009300'
  },
  {
    name: 'עדי נובאני',
    subject: 'משפחה',
    Assosiation: 'כללית',
    Address: 'שייח ג\'ראח 51',
    City: 'ירושלים',
    Telephone: '02-6702951'
  },
  {
    name: 'נעם בנימיני',
    subject: 'המטולוגיה',
    Assosiation: 'איכילוב',
    Address: 'ויצמן 6',
    City: 'תל אביב',
    Telephone: '03-6973380'
  },
  {
    name: 'נחום סגול',
    subject: 'רפואת משפחה, ילדים, הפרעות קשב וריכוז',
    Assosiation: 'מכבי',
    Address: 'שדרות מנחם בגין 48',
    City: 'גדרה',
    Telephone: '08-8693836'
  },
  {
    name: 'אורית סטוליק-דולברג',
    subject: 'רפואה לשיכוך כאב',
    Assosiation: 'שיבא',
    Address: '',
    City: 'תל השומר',
    Telephone: '03-5302555'
  },
  {
    name: 'אורית סטולר',
    subject: 'נוירולוגית ילדים',
    Assosiation: 'אסף הרופא',
    Address: '',
    City: 'צריפין',
    Telephone: '08-9779999'
  },
  {
    name: 'מוחמד עדוי',
    subject: 'רפואה פנימית, ראומטולוגיה',
    Assosiation: 'פוריה',
    Address: 'דב הוז',
    City: 'טבריה',
    Telephone: '04-6652268'
  },
  {
    name: 'הווארד עמיטל',
    subject: 'פנימית',
    Assosiation: 'שיבא',
    Address: 'דרך שיבא 2',
    City: 'רמת גן',
    Telephone: '03-5302652'
  },
  {
    name: 'בן עמית',
    subject: 'פסיכיאטריה',
    Assosiation: 'מרכז רפואי שיקומי רעות',
    Address: 'שדרות החי"ל 2',
    City: 'תל אביב',
    Telephone: '03-5081000'
  },
  {
    name: 'בן עמית',
    subject: 'פסיכיאטריה',
    Assosiation: 'עמותה שיקומית מעל"ה',
    Address: 'הברזל 15',
    City: 'תל אביב',
    Telephone: '073-3300100'
  },
  {
    name: 'פיראס פאהום',
    subject: 'נוירולוגיה',
    Assosiation: 'איכילוב',
    Address: 'וייצמן 6',
    City: 'תל אביב',
    Telephone: '03-6974000'
  },
  {
    name: 'יעקב פוגלמן',
    subject: 'כאב',
    Assosiation: 'רמב"ם',
    Address: 'העלייה השנייה 8',
    City: 'חיפה',
    Telephone: '050-6821277'
  },
  {
    name: 'דניאל פישר',
    subject: 'פסיכיאטריה',
    Assosiation: 'בית חולים לב השרון',
    Address: '',
    City: 'נתניה',
    Telephone: '050-8777277'
  },
  {
    name: 'אמיר פישר',
    subject: 'רפואת ילדים',
    Assosiation: 'מרכז רפואי כרמל',
    Address: 'מיכל 7',
    City: 'חיפה',
    Telephone: '04-8250211'
  },
  {
    name: 'אזקיל פלכטר',
    subject: 'אונקולוגיה',
    Assosiation: 'רמב"ם',
    Address: '8 העלייה השנייה',
    City: 'חיפה',
    Telephone: '04-7776716'
  },
  {
    name: 'נתאי דוד פרנקל',
    subject: 'ילדים',
    Assosiation: 'אלין',
    Address: 'שמריהו לוין 84',
    City: 'ירושלים',
    Telephone: '02-6494222'
  },
  {
    name: 'ענבר צופיה',
    subject: 'פנימית',
    Assosiation: 'רמב"ם',
    Address: '',
    City: 'חיפה',
    Telephone: '04-7773195'
  },
  {
    name: 'משה קוטלר',
    subject: 'פסיכיאטריה',
    Assosiation: 'רמת חן אלוף דויד 40',
    Address: 'רמת חן אלוף דוד 40',
    City: 'גבעתיים',
    Telephone: '050-5191605'
  },
  {
    name: 'אריק קפל',
    subject: 'רפואה תעסוקתית',
    Assosiation: 'כללית',
    Address: 'צה"ל 52',
    City: 'חיפה',
    Telephone: '04-8590212'
  },
  {
    name: 'דרור קראוס',
    subject: 'ילדים',
    Assosiation: 'שניידר (כללית)',
    Address: 'קפלן 14',
    City: 'פתח תקווה',
    Telephone: '03-9253615'
  },
  {
    name: 'אלאונורה קרסני',
    subject: 'רפואת משפחה',
    Assosiation: 'מטודלה',
    Address: 'בנימין מטודלה 5',
    City: 'ירושלים',
    Telephone: '02-5398555'
  },
  {
    name: 'ראשד קשקוש',
    subject: 'כאב',
    Assosiation: 'כללית',
    Address: 'לב השרון 42',
    City: 'קדימה צורן',
    Telephone: '09-8949859'
  },
  {
    name: 'דרור רובינסון',
    subject: 'אורתופדיה',
    Assosiation: 'כללית לאומית',
    Address: 'העצמאות 67',
    City: 'בת ים',
    Telephone: '03-5193018'
  },
  {
    name: 'עירית רויטמן קנתור',
    subject: 'גריאטריה',
    Assosiation: 'לאומית',
    Address: 'הבנים 14',
    City: 'הוד השרון',
    Telephone: '09-7621500'
  },
  {
    name: 'עדי רון',
    subject: 'גריאטריה',
    Assosiation: '',
    Address: 'בר כוכבא 16',
    City: 'בני ברק',
    Telephone: '09-8992822'
  },
  {
    name: 'מיכל רותם',
    subject: 'משפחה',
    Assosiation: 'אסותא',
    Address: 'יגאל אלון 96',
    City: 'תל אביב',
    Telephone: '03-7643000'
  },
  {
    name: 'לריסה ריבו',
    subject: 'אונקולוגיה',
    Assosiation: 'אסותא',
    Address: 'הרפואה 7',
    City: 'אשדוד',
    Telephone: '08-3004100'
  },
  {
    name: 'עמיקם רשף',
    subject: 'נוירולוגיה',
    Assosiation: 'בית חולים העמק',
    Address: '',
    City: 'עפולה',
    Telephone: '04-6494123'
  },
  {
    name: 'גיל שויד',
    subject: 'רפואה תעסוקתית',
    Assosiation: 'עמותת "גוונים של סגול',
    Address: 'ההסתדרות 55, קניון סינמול',
    City: 'חיפה',
    Telephone: '054-7104050'
  },
  {
    name: 'גיל שויד',
    subject: 'רפואה תעסוקתית',
    Assosiation: 'עמותת גוונים של סגול',
    Address: 'רחוב הברזל 34',
    City: 'תל אביב',
    Telephone: '054-7104050'
  },
  {
    name: 'נועה שטרן',
    subject: 'משפחה',
    Assosiation: 'לניאדו',
    Address: 'דברי חיים 16',
    City: 'נתניה',
    Telephone: '09-8604666'
  },
  {
    name: 'רועי שיינפלד',
    subject: 'כאב',
    Assosiation: 'שיבא',
    Address: 'מוטה גור 4',
    City: 'פתח תקווה',
    Telephone: '053-9956934'
  },
  {
    name: 'ברקת שיף קרן',
    subject: 'כאב',
    Assosiation: 'מכבי',
    Address: 'תש"ח 2',
    City: 'תל אביב',
    Telephone: '072-2131015'
  },
  {
    name: 'ליאורה שכטר',
    subject: 'משפחה',
    Assosiation: 'מאוחדת',
    Address: 'תום לנטוס 26 קרית השרון',
    City: 'נתניה',
    Telephone: '09-8660800'
  },
  {
    name: 'דפנה שלזינגר קשתי',
    subject: 'פסיכיאטריה',
    Assosiation: 'פרטי',
    Address: 'רמת חן אלוף דויד 40',
    City: 'רמת גן',
    Telephone: '073-7586308'
  },
  {
    name: 'נדב שליט',
    subject: 'פסיכיאטריה',
    Assosiation: 'בית חולים לב השרון',
    Address: 'השיבולים',
    City: 'צור משה',
    Telephone: '09-8981111'
  },
  {
    name: 'דורית שמואלי',
    subject: 'נוירולוגיה',
    Assosiation: 'כללית',
    Address: 'דרך בית לחם 75',
    City: 'ירושלים',
    Telephone: '02-5457111'
  },
  {
    name: 'גילת שנהב זלצמן',
    subject: 'פנימית',
    Assosiation: 'לניאדו',
    Address: 'דברי חיים 16',
    City: 'נתניה',
    Telephone: '09-8604666'
  },
  {
    name: 'יורי שפאק',
    subject: 'פסיכיאטריה ונרקולוגיה',
    Assosiation: 'מכבי',
    Address: 'החרוב 11',
    City: 'נתניה',
    Telephone: '052-2515925'
  },
  {
    name: 'רוני שרון',
    subject: 'נוירולוגיה',
    Assosiation: 'שיבא',
    Address: 'דרך שיבא 2',
    City: 'רמת גן',
    Telephone: '052-3433900'
  },
  {
    name: 'אביגיל אלעזר',
    subject: 'רפואת משפחה',
    Assosiation: 'בית רבקה',
    Address: 'החמישה 4',
    City: 'פתח תקווה',
    Telephone: '03-39373888'
  },
  {
    name: 'סער אניס',
    subject: 'נוירולוגיה',
    Assosiation: 'איכילוב',
    Address: 'ויצמן 6',
    City: 'תל אביב',
    Telephone: '03-6973495'
  },
  {
    name: 'יזהר אריאל',
    subject: 'כירורגיה אורתופדית',
    Assosiation: 'אסותא כלניות',
    Address: 'מנחם בגין 126',
    City: 'אשדוד',
    Telephone: '052-6268004'
  },
  {
    name: 'עדי ארן',
    subject: 'נוירולוגית ילדים והתפתחות הילד',
    Assosiation: 'שערי צדק',
    Address: 'שמואל בייט 12',
    City: 'ירושלים',
    Telephone: '02-6555414'
  },
  {
    name: 'נעמה אשר ברגר',
    subject: 'רפואת משפחה',
    Assosiation: 'בילינסון',
    Address: 'זאב ז\'בוטינסקי 39',
    City: 'פתח תקווה',
    Telephone: '03-9378146'
  },
  {
    name: 'אולסיה גולדמן',
    subject: 'אונקולוגיה',
    Assosiation: 'בית חולים מאיר',
    Address: 'טשרניחובסקי 59',
    City: 'כפר סבא',
    Telephone: '09-7472713'
  },
  {
    name: 'דפנה גולן',
    subject: 'נוירולוגיה והתפתחות הילד',
    Assosiation: 'מכבי',
    Address: 'החושן 3',
    City: 'מבשרת ציון',
    Telephone: '02-9935900'
  },
  {
    name: 'עליזה הכימיאן פרגמן',
    subject: 'רפואת משפחה ורפואה משלימה',
    Assosiation: 'שיבא תל השומר',
    Address: 'דרך שיבא 2',
    City: 'רמת גן',
    Telephone: '03-7917800'
  },
  {
    name: 'סיימון ישראלי-קורן',
    subject: 'נוירולוגיה',
    Assosiation: 'שיבא תל השומר',
    Address: 'דרך שיבא 2',
    City: 'רמת גן',
    Telephone: '03-5305864'
  },
  {
    name: 'רונן חדי כהן',
    subject: 'נוירולוגית ילדים והתפתחות הילד',
    Assosiation: 'כללית / וולפסון',
    Address: 'דב הוז 1',
    City: 'תל אביב',
    Telephone: '03-5202999'
  },
  {
    name: 'דרורית שהם לחמן',
    subject: 'רפואת משפחה',
    Assosiation: 'מכבי / כללית',
    Address: 'ז\'בוטינסקי 33',
    City: 'רמת גן',
    Telephone: '03-5292424'
  },
  {
    name: 'לילך שמר מאירי',
    subject: 'נוירולוגיה והתפתחות הילד',
    Assosiation: 'מרכז רפואי כרמל',
    Address: 'מיכ"ל 7',
    City: 'חיפה',
    Telephone: '04-8250247'
  },
  {
    name: 'אהרון שיף',
    subject: 'נוירולוגיה והתפתחות הילד',
    Assosiation: 'רמב"ם',
    Address: 'עפרון 27',
    City: 'חיפה',
    Telephone: '04-7774822'
  },
  {
    name: 'אורית שירי',
    subject: 'גריאטריה ורפואה פנימית',
    Assosiation: 'בית יוליאנה',
    Address: 'דוד רזיאל 22',
    City: 'הרצליה',
    Telephone: '09-9704646'
  },
  {
    name: 'לביה תמיר',
    subject: 'כירורגיה אורתופדית',
    Assosiation: 'כללית',
    Address: 'ביאליק 13',
    City: 'רמת גן',
    Telephone: '050-9912577'
  },
  {
    name: 'דיב דאוד',
    subject: 'רפואה פנימית ואנדוקרינולוגיה',
    Assosiation: 'בית החולים האיטלקי',
    Address: 'שדרות המגינים 106',
    City: 'חיפה',
    Telephone: '051-2063664'
  }
];



  ngOnInit() {
  }



  async showModal(name: string, phone: any, phone2: any, address: any) {
    const modal = await this.modalCtrl.create({
      component: DocmodalPage,
      backdropDismiss: true,
      componentProps: {
        name,
        phone,
        phone2,
        address
      }
    });

    return await modal.present();
  }



  goHome()
  {
    this.navCtrl.navigateBack('home');
  }

}
