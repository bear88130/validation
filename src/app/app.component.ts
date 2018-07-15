import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isCheckedEmail: boolean;
  isCheckedPassword: boolean;
  isCheckedRePassword: boolean;
  isCheckedName: boolean;
  isCheckedPhone: boolean;
  isCheckedYear: boolean;
  isCheckedMonth: boolean;
  isCheckedDay: boolean;
  isCheckedCity: boolean;
  isCheckedDist: boolean;
  isCheckedAddress: boolean;

  demoImgSrc;
  nowProcess: number;
  year = new Array;
  month = new Array;
  day = new Array;
  distArray = new Array;
  map = {
    'city':['臺北市','基隆市','新北市','宜蘭縣','桃園市','新竹市','新竹縣','苗栗縣','臺中市','彰化縣','南投縣','嘉義市','嘉義縣','雲林縣','臺南市','高雄市','澎湖縣','金門縣','屏東縣','臺東縣','花蓮縣','連江縣'],
    'region':[
        ['中正區','大同區','中山區','松山區','大安區','萬華區','信義區','士林區','北投區','內湖區','南港區','文山區'],
        ['仁愛區','信義區','中正區','中山區','安樂區','暖暖區','七堵區'],
        ['萬里區','金山區','板橋區','汐止區','深坑區','石碇區','瑞芳區','平溪區','雙溪區','貢寮區','新店區','坪林區','烏來區','永和區','中和區','土城區','三峽區','樹林區','鶯歌區','三重區','新莊區','泰山區','林口區','蘆洲區','五股區','八里區','淡水區','三芝區','石門區'],
        ['宜蘭市','頭城鎮','礁溪鄉','壯圍鄉','員山鄉','羅東鎮','三星鄉','大同鄉','五結鄉','冬山鄉','蘇澳鎮','南澳鄉','釣魚台'],
        ['中壢區','平鎮區','龍潭區','楊梅區','新屋區','觀音區','桃園區','龜山區','八德區','大溪區','復興區','大園區','蘆竹區'],
        ['東區','北區','香山區'],
        ['竹北市','湖口鄉','新豐鄉','新埔鎮','關西鎮','芎林鄉','寶山鄉','竹東鎮','五峰鄉','橫山鄉','尖石鄉','北埔鄉','峨眉鄉'],
        ['竹南鎮','頭份市','三灣鄉','南庄鄉','獅潭鄉','後龍鎮','通霄鎮','苑裡鎮','苗栗市','造橋鄉','頭屋鄉','公館鄉','大湖鄉','泰安鄉','銅鑼鄉','三義鄉','西湖鄉','卓蘭鎮'],
        ['中區','東區','南區','西區','北區','北屯區','西屯區','南屯區','太平區','大里區','霧峰區','烏日區','豐原區','后里區','石岡區','東勢區','和平區','新社區','潭子區','大雅區','神岡區','大肚區','沙鹿區','龍井區','梧棲區','清水區','大甲區','外埔區','大安區'],
        ['彰化市','芬園鄉','花壇鄉','秀水鄉','鹿港鎮','福興鄉','線西鄉','和美鎮','伸港鄉','員林市','社頭鄉','永靖鄉','埔心鄉','溪湖鎮','大村鄉','埔鹽鄉','田中鎮','北斗鎮','田尾鄉','埤頭鄉','溪州鄉','竹塘鄉','二林鎮','大城鄉','芳苑鄉','二水鄉'],
        ['南投市','中寮鄉','草屯鎮','國姓鄉','埔里鎮','仁愛鄉','名間鄉','集集鎮','水里鄉','魚池鄉','信義鄉','竹山鎮','鹿谷鄉'],
        ['東區','西區'],
        ['番路鄉','梅山鄉','竹崎鄉','阿里山','中埔鄉','大埔鄉','水上鄉','鹿草鄉','太保市','朴子市','東石鄉','六腳鄉','新港鄉','民雄鄉','大林鎮','溪口鄉','義竹鄉','布袋鎮'],
        ['斗南鎮','大埤鄉','虎尾鎮','土庫鎮','褒忠鄉','東勢鄉','臺西鄉','崙背鄉','麥寮鄉','斗六市','林內鄉','古坑鄉','莿桐鄉','西螺鎮','二崙鄉','北港鎮','水林鄉','口湖鄉','四湖鄉','元長鄉'],
        ['中西區','東區','南區','北區','安平區','安南區','永康區','歸仁區','新化區','左鎮區','玉井區','楠西區','南化區','仁德區','關廟區','龍崎區','官田區','麻豆區','佳里區','西港區','七股區','將軍區','學甲區','北門區','新營區','後壁區','白河區','東山區','六甲區','下營區','柳營區','鹽水區','善化區','大內區','山上區','新市區','安定區'],
        ['新興區','前金區','苓雅區','鹽埕區','鼓山區','旗津區','前鎮區','三民區','楠梓區','小港區','左營區','仁武區','大社區','東沙群島','南沙群島','岡山區','路竹區','阿蓮區','田寮區','燕巢區','橋頭區','梓官區','彌陀區','永安區','湖內區','鳳山區','大寮區','林園區','鳥松區','大樹區','旗山區','美濃區','六龜區','內門區','杉林區','甲仙區','桃源區','那瑪夏區','茂林區','茄萣區'],
        ['馬公市','西嶼鄉','望安鄉','七美鄉','白沙鄉','湖西鄉'],
        ['金沙鎮','金湖鎮','金寧鄉','金城鎮','烈嶼鄉','烏坵鄉'],
        ['屏東市','三地門鄉','霧台鄉','瑪家鄉','九如鄉','里港鄉','高樹鄉','鹽埔鄉','長治鄉','麟洛鄉','竹田鄉','內埔鄉','萬丹鄉','潮州鎮','泰武鄉','來義鄉','萬巒鄉','崁頂鄉','新埤鄉','南州鄉','林邊鄉','東港鎮','琉球鄉','佳冬鄉','新園鄉','枋寮鄉','枋山鄉','春日鄉','獅子鄉','車城鄉','牡丹鄉','恆春鎮','滿州鄉'],
        ['臺東市','綠島鄉','蘭嶼鄉','延平鄉','卑南鄉','鹿野鄉','關山鎮','海端鄉','池上鄉','東河鄉','成功鎮','長濱鄉','太麻里','金峰鄉','大武鄉','達仁鄉'],
        ['花蓮市','新城鄉','秀林鄉','吉安鄉','壽豐鄉','鳳林鎮','光復鄉','豐濱鄉','瑞穗鄉','萬榮鄉','玉里鎮','卓溪鄉','富里鄉'],
        ['南竿鄉','北竿鄉','莒光鄉','東引鄉']
    ]
  };

  ngOnInit(): void {
    const Today = new Date();
    this.nowProcess = 0;
    this.year = [];
    this.month = [];
    this.day = [];
    for (let i = 1900; i <= Today.getFullYear(); i++) {
      this.year.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      this.month.push(i);
    }
    for (let i = 1; i <= 31; i++) {
      this.day.push(i);
    }

  }

  checkEmail(email: string) {
    const reEmail = new RegExp(/^(\w+)@([\w.]+)(\.|-)[\w.]/);
    this.isCheckedEmail = reEmail.test(email) ? false : true;
  }

  checkPassword(password: string) {
    const rePassword = new RegExp(/^(\w*8)/);
    this.isCheckedPassword = rePassword.test(password) ? false : true;
  }

  checkName(name: string) {
    const reName = new RegExp(/[\u4E00-\u9FA5]{2,5}/);
    this.isCheckedName = reName.test(name) ? false : true;
  }

  checkPhone(phone: string) {
    const rePhone = new RegExp(/(\d){10}/);
    this.isCheckedPhone = rePhone.test(phone) ? false : true;
  }

  checkRePassword(password: HTMLInputElement, rePassword: string) {
    this.isCheckedRePassword = (password.value === rePassword) ? false : true;
  }

  checkYear(year: string) {
    this.isCheckedYear = (year === '0') ? true : false;
  }

  checkMonth(month: string) {
    this.isCheckedMonth = (month === '0') ? true : false;
  }

  checkDay(day: string) {
    this.isCheckedDay = (day === '0') ? true : false;
  }

  checkCity(city: string , addressInput: HTMLInputElement) {
    this.isCheckedCity = (city === '0') ? true : false;
    this.distArray = this.map.region[this.map.city.indexOf(city)];
    addressInput.value = city;
  }

  checkDist(dist: string , addressInput: HTMLInputElement , cityInput: HTMLInputElement) {
    this.isCheckedDist = (dist === '0') ? true : false;
    addressInput.value = cityInput.value + dist;
  }

  checkAddress(address) {
    const reAddress = new RegExp(/[\u4E00-\u9FA5]{8,}/);
    this.isCheckedAddress = reAddress.test(address) ? false : true;

  }

  checkProcess1() {
    // if (this.isCheckedEmail === false
    //   && this.isCheckedPassword === false
    //   && this.isCheckedRePassword === false) {
    //     alert('通過');
    //     this.nowProcess = 1;
    // } else {
    //   alert('驗證失敗');
    // }
    this.nowProcess = 1;
  }

  checkProcess2() {
    this.nowProcess = 2;
  }

  finish(num) {
    return (this.nowProcess >= num) ? true : false;
  }

  now(num) {
    return (this.nowProcess === num) ? true : false;
  }

}
