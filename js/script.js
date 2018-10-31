"use strict";

$(document).ready(function () {
    $(".st34").on("click", function () {
        $(".st34").removeClass("active");
        $(this).addClass("active");
        var city_number = $(this).attr("class").split(' ')[1];

        var _loop = function _loop(i) {
            if (city[i].number == city_number) {
                $(".form_box").html("");
                $(".form_box").append("<div><a id='search_text' href='#'>매장명으로 검색하기</a><h3>" + city[i].name + "</h3><div><ul></ul></div></div>");
                if (city[i].area.length == 0) $(".form_box ul").append("<span>매장이 없습니다.</span>");

                var _loop2 = function _loop2(j) {
                    $(".form_box ul").append("<li><a class='l" + j + "' href='#client_list'>" + city[i].area[j] + "</a></li>");
                    $(".form_box .l" + j + "").on("click", function () {
                        $(".client_list tbody").html("");
                        var count = 0;
                        for (var k = 0; k < data.length; k++) {
                            if (city[i].area[j] == data[k].adrs2) {
                                $(".client_list tbody").append("<tr><td>" + data[k].name + "</td><td>" + data[k].adrs1 + " " + data[k].adrs2 + " " + data[k].adrs3 + "</td><td>" + data[k].phone + "</td><td><a target='_blank' href='http://map.daum.net/?q=" + data[k].adrs1 + " " + data[k].adrs2 + " " + data[k].adrs3 + "&map_type=TYPE_MAP'>지도보기</a></td></tr>");
                                count++;
                            }
                        }
                        $(".client_list h3").html("[총 " + count + "개 매장]");
                    });
                };

                for (var j = 0; j < city[i].area.length; j++) {
                    _loop2(j);
                }
                $(".form_box #search_text, .client_list #re_search").on("click", function () {
                    $(".form_box").html("");
                    $(".form_box").append("<p>닥터스모크 전국 판매점 찾기 서비스는 지도에서 바로 지역을 선택하거나 매장명을 직접 검색할 수 있는 서비스를 제공하고 있습니다.</p><input class='sc_text' type='text' placeholder='매장명을 입력하세요.'><a class='sc_btn' href='#' onclick='return searchByName()'>검색</a>");
                    $(".sc_text").keypress(function (e) {
                        if (e.keyCode == 13) {
                            searchByName();
                        }
                    });
                    $(".st34").removeClass("active");
                });
            }
        };

        for (var i = 0; i < city.length; i++) {
            _loop(i);
        }
    });

    $(".client_list h3").html("[총 " + data.length + "개 매장]");
    for (var i = 0; i < data.length; i++) {
        $(".client_list tbody").append("<tr><td>" + data[i].name + "</td><td>" + data[i].adrs1 + " " + data[i].adrs2 + " " + data[i].adrs3 + "</td><td>" + data[i].phone + "</td><td><a target='_blank' href='http://map.daum.net/?q=" + data[i].adrs1 + " " + data[i].adrs2 + " " + data[i].adrs3 + "&map_type=TYPE_MAP'>지도보기</a></td></tr>");
    }

    $(".sc_text").keypress(function (e) {
        if (e.keyCode == 13) {
            searchByName();
        }
    });

    var ie_ver = get_version_of_IE();
    if(ie_ver != -1 )
    {
        var full_map = $("#left_map");
        full_map.addClass('full_map_ie');
    }
});

function searchByName() {
    $(".client_list tbody").html("");
    var count = 0;
    var val = $(".sc_text").val();
    var exptext = new RegExp(val, "g");
    for (var k = 0; k < data.length; k++) {
        if (exptext.test(data[k].name) == true || exptext.test(data[k].adrs1) == true || exptext.test(data[k].adrs2) == true || exptext.test(data[k].adrs3) == true) {
            $(".client_list tbody").append("<tr><td>" + data[k].name + "</td><td>" + data[k].adrs1 + " " + data[k].adrs2 + " " + data[k].adrs3 + "</td><td>" + data[k].phone + "</td><td><a target='_blank' href='http://map.daum.net/?q=" + data[k].adrs1 + " " + data[k].adrs2 + " " + data[k].adrs3 + "&map_type=TYPE_MAP'>지도보기</a></td></tr>");
            count++;
        }
    }
    if (count == 0) $(".client_list tbody").append("<span>매장이 없습니다.</span>");
    $(".client_list h3").html("[총 " + count + "개 매장]");

    var divLoc = $('.client_list').offset();
    $('html, body').animate({ scrollTop: divLoc.top }, "fast");
}

function get_version_of_IE () { 
    var word; 
    var agent = navigator.userAgent.toLowerCase(); 
    // IE old version ( IE 10 or Lower ) 
    if ( navigator.appName == "Microsoft Internet Explorer" ) word = "msie "; 
    // IE 11 
    else if ( agent.search( "trident" ) > -1 ) word = "trident/.*rv:"; 
    // Microsoft Edge  
    else if ( agent.search( "edge/" ) > -1 ) word = "edge/"; 
    // 그외, IE가 아니라면 ( If it's not IE or Edge )  
    else return -1; 
    var reg = new RegExp( word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})" ); 
    if (  reg.exec( agent ) != null  ) return parseFloat( RegExp.$1 + RegExp.$2 ); 
    return -1; 
}