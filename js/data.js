var data = [
{ name: "청구1급카서비스본점", phone: "053-633-0877", adrs1: "대구광역시", adrs2: "달서구", adrs3: "진천로 14 청구1급카서비스" },
{ name: "마스타정비", phone: "041-353-6051", adrs1: "충청남도", adrs2: "당진시", adrs3: "고대면 보덕포로 454 마스타정비" },
{ name: "한마정비", phone: "055-241-3866", adrs1: "경상남도", adrs2: "창원시", adrs3: "마산회원구 회원동로 78 한마정비" },
{ name: "태수정비", phone: "052-201-4477", adrs1: "울산광역시", adrs2: "동구", adrs3: "문현로 17 태수정비" },
{ name: "상우카센타", phone: "02-2207-5774", adrs1: "서울특별시", adrs2: "중랑구", adrs3: "망우동 149-24 상우카센타" },
{ name: "한일카서비스", phone: "051-405-0057", adrs1: "부산광역시", adrs2: "영도구", adrs3: "태종로 779 한일카써비스 세차장" },
{ name: "병만이가차고치는집", phone: "061-372-2515", adrs1: "전라남도", adrs2: "화순군", adrs3: "화순읍 충의로 159 병만이가차고치는집" },
{ name: "용문카센터", phone: "02-712-7609", adrs1: "서울특별시", adrs2: "용산구", adrs3: "새창로 103 용문카센터" },
{ name: "공임나라", phone: "02-381-0951", adrs1: "서울특별시", adrs2: "은평구", adrs3: "북한산로 253 공임나라" },
{ name: "알포카", phone: "010-5291-1313", adrs1: "부산광역시", adrs2: "수영구", adrs3: "연수로 310번길 34-3 알포카" },
{ name: "복지자동차정비공업사", phone: "010-8464-1105", adrs1: "경상남도", adrs2: "창원시", adrs3: "진해구 태평로 34번길 1-1 한국타이어 속천점 [태평동, 42-2](받는주소)" },
{ name: "애니카랜드 화원점", phone: "053-639-6525", adrs1: "대구광역시", adrs2: "달성군", adrs3: "화원읍 성화로 12 애니카랜드 화원점" },
{ name: "산청1급정비공업사", phone: "055-973-7676", adrs1: "경상남도", adrs2: "산청군", adrs3: "산청읍 친환경로2720번길 91 산청1급정비" },
{ name: "월드카 부분정비", phone: "053-562-4831", adrs1: "대구광역시", adrs2: "달서구", adrs3: "장기동 560-3 월드카부분정비" },
{ name: "청솔카클리닉", phone: "042-623-0901", adrs1: "대전광역시", adrs2: "대덕구", adrs3: "중리동 245-16 청솔카" },
{ name: "KTSA누리카서비스", phone: "053-636-2484", adrs1: "대구광역시", adrs2: "달서구", adrs3: "상원로 180-18" },
{ name: "오토카", phone: "061-454-5850", adrs1: "전라남도", adrs2: "무안군", adrs3: "무안읍 성동리 629 오토카" },
{ name: "착한정비센터(성서공단점)", phone: "053-587-5109", adrs1: "대구광역시", adrs2: "달서구", adrs3: "월암동 1095" },
{ name: "에이씨델코(자동차와사람들)", phone: "053-952-0983", adrs1: "대구광역시", adrs2: "북구", adrs3: "서변동 1736-13" },
{ name: "한일자동차공업사", phone: "031-881-5486", adrs1: "경기도", adrs2: "여주시", adrs3: "흥천면 계신리 551 한일자동차공업사" },
{ name: "그린카클리닉", phone: "053-755-8802", adrs1: "대구광역시", adrs2: "수성구", adrs3: "무열로 155" },
{ name: "s모터스", phone: "053-766-3200", adrs1: "대구광역시", adrs2: "수성구", adrs3: "황금동 756-1" },
{ name: "페나메멘토", phone: "054-453-8787", adrs1: "경상북도", adrs2: "구미시", adrs3: "고아읍 들성로 226" },
{ name: "명종모터스", phone: "053-636-5959", adrs1: "대구광역시", adrs2: "달서구", adrs3: "상화로 155" }
];

var city = [
{ name: "서울특별시", area: new Array(), number: "c0" },
{ name: "인천광역시", area: new Array(), number: "c1" },
{ name: "경기도", area: new Array(), number: "c2" },
{ name: "강원도", area: new Array(), number: "c3" },
{ name: "충청북도", area: new Array(), number: "c4" },
{ name: "충청남도", area: new Array(), number: "c5" },
{ name: "대전광역시", area: new Array(), number: "c6" },
{ name: "전라북도", area: new Array(), number: "c7" },
{ name: "전라남도", area: new Array(), number: "c8" },
{ name: "광주광역시", area: new Array(), number: "c9" },
{ name: "경상북도", area: new Array(), number: "c10" },
{ name: "경상남도", area: new Array(), number: "c11" },
{ name: "대구광역시", area: new Array(), number: "c12" },
{ name: "울산광역시", area: new Array(), number: "c13" },
{ name: "부산광역시", area: new Array(), number: "c14" },
{ name: "제주도", area: new Array(), number: "c15" }
];

for(let i=0;i<data.length;i++) {
    switch (data[i].adrs1) {
        case "서울특별시":
            if($.inArray(data[i].adrs2, city[0].area)) {
                city[0].area.push(data[i].adrs2);
            }
            break;
        case "인천광역시":
            if($.inArray(data[i].adrs2, city[1].area)) {
                city[1].area.push(data[i].adrs2);
            }
            break;
        case "경기도":
            if($.inArray(data[i].adrs2, city[2].area)) {
                city[2].area.push(data[i].adrs2);
            }
            break;
        case "강원도":
            if($.inArray(data[i].adrs2, city[3].area)) {
                city[3].area.push(data[i].adrs2);
            }
            break;
        case "충청북도":
            if($.inArray(data[i].adrs2, city[4].area)) {
                city[4].area.push(data[i].adrs2);
            }
            break;
        case "충청남도":
            if($.inArray(data[i].adrs2, city[5].area)) {
                city[5].area.push(data[i].adrs2);
            }
            break;
        case "대전광역시":
            if($.inArray(data[i].adrs2, city[6].area)) {
                city[6].area.push(data[i].adrs2);
            }
            break;
        case "전라북도":
            if($.inArray(data[i].adrs2, city[7].area)) {
                city[7].area.push(data[i].adrs2);
            }
            break;
        case "전라남도":
            if($.inArray(data[i].adrs2, city[8].area)) {
                city[8].area.push(data[i].adrs2);
            }
            break;
        case "광주광역시":
            if($.inArray(data[i].adrs2, city[9].area)) {
                city[9].area.push(data[i].adrs2);
            }
            break;
        case "경상북도":
            if($.inArray(data[i].adrs2, city[10].area)) {
                city[10].area.push(data[i].adrs2);
            }
            break;
        case "경상남도":
            if($.inArray(data[i].adrs2, city[11].area)) {
                city[11].area.push(data[i].adrs2);
            }
            break;
        case "대구광역시":
            if($.inArray(data[i].adrs2, city[12].area) === -1) {
                city[12].area.push(data[i].adrs2);
            }
            break;
        case "울산광역시":
            if($.inArray(data[i].adrs2, city[13].area)) {
                city[13].area.push(data[i].adrs2);
            }
            break;
        case "부산광역시":
            if($.inArray(data[i].adrs2, city[14].area)) {
                city[14].area.push(data[i].adrs2);
            }
            break;
        case "제주도":
            if($.inArray(data[i].adrs2, city[15].area)) {
                city[15].area.push(data[i].adrs2);
            }
            break;
        default:
            break;
    }
}