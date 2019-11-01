$(document).ready(function(){
    // 첫페이지 로드 쿠키값 있을 경우 안보이게
    if (window.localStorage.getItem('cookieWelcome')==='done') {
        $(".firstDiv").hide();
        $("body").css("overflow","auto");
    } else {
        $(".firstDiv").show();
        $("body").css("overflow","hidden");
    }

    // 첫페이지 로드 & 로컬스토리지 이용
    $(".welcomBtn").click(function(e){
        e.preventDefault();
        $(".firstDiv").fadeOut();
        $("body").css("overflow","auto");
        window.localStorage.setItem('cookieWelcome','done');
    });

    // 헤더 고정
    $(document).scroll(function(){
        var position = $(window).scrollTop(),
            headerHeight = $("header").outerHeight();
        if(position > headerHeight) {
            $("header").addClass("fixed");
            $("#work").css("margin-top",headerHeight);
        } else {
            $("header").removeClass("fixed");
            $("#work").css("margin-top",0);
        }
    });

    // 헤더 메뉴 클릭 이벤트
    $("header .burger").click(function(){
        if($(this).hasClass("change")) {
            $(this).removeClass("change");
            $(".menu").removeClass("on");
        } else {
            $(this).addClass("change");
            $(".menu").addClass("on");
        }
    });

    $("header .menu > a").click(function(){
        $("header .menu").removeClass("on");
        $("header .burger").removeClass("change");
    });

    var port_arr = [
        {"img":"1","title":"게티이미지코리아","work":"1"},
        {"img":"2","title":"2020캘린더","work":"2"},
        {"img":"13","title":"게티이미지뱅크모바일","work":"13"},
        {"img":"3","title":"2019캘린더","work":"3"},
        {"img":"10","title":"Google Analytics","work":"10"},
        {"img":"4","title":"PR솔루션","work":"4"},
        {"img":"5","title":"2018올림픽","work":"5"},
        {"img":"6_1","title":"유지보수 및 운영","work":"6"},
        {"img":"7_1","title":"라마르조코코리아","work":"7"},
        {"img":"8_1","title":"홈스토리생활","work":"8"},
        {"img":"9","title":"대리주부앱","work":"9"},
        {"img":"11_1","title":"제안서","work":"11"},
        {"img":"12_1","title":"중소기업 홈페이지","work":"12"}
    ]
    $(".portDivIn").empty();
    $.each(port_arr, function(i){
        var add = $('<article class="grid"><a href="./work/work'+(i+1)+'.html" style="background-image:url(./img/thumb_'+port_arr[i].img+'.jpg)" class="grid-item"><div class="portTit"><span>'+port_arr[i].title+'</span></div></a><div class="portDetail"><div class="portDetailIn"></div></div></article>');
        $(".portDivIn").append(add);
    });

    // 포트폴리오 상세보기
    $(".portDiv .grid-item").click(function(e){
        e.preventDefault();
        $(".grid .portDetail").each(function(idx, item){
            var add = $('<div class="burger change"><span class="bar1"></span><span class="bar2"></span><span class="bar3"></span></div>');
            $(item).append(add);
        });
        var gridIndex = $(this).parent().index();
        $(".portDetailIn").load("/work/work"+port_arr[gridIndex].work+".html");
        $(this).next().fadeIn();
        $("body").css("overflow","hidden");
    });

    // 포트폴리오 상세보기 창 닫기
    $("body").on('click', '.portDetail .burger.change', function(){
        $(this).closest(".portDetail").fadeOut();
        $("body").css("overflow","auto");
    });

    // 더보기 버튼으로 더 불러오기
    function loadMore() {
        $(".grid").addClass("hide");
        $(".grid").slice(0, 4).removeClass("hide");
        $(".moreBtn").click(function(){
            $(".grid.hide").slice(0, 4).removeClass("hide");
            if ($(".grid.hide").length === 0) {
                $(".moreBtn").fadeOut();
            }
        });
    }

    loadMore();

    /* 구글차트 */
    // 차트1
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawStuff1);
    google.charts.setOnLoadCallback(drawStuff2);
    google.charts.setOnLoadCallback(drawStuff3);

    function drawStuff1() {
    var data1 = new google.visualization.arrayToDataTable([
        ['Skill', 'Ability'],
        ["html", 99],
        ["css", 99],
        ["javascript", 80],
        ["jquery", 80],
        ["php", 30],
        ["python", 10]
    ]);

    var options1 = {
        width: 400,
        legend: { position: 'none' },
        /*chart: {
        title: 'Chess opening moves',
        subtitle: 'popularity by percentage' },*/
        axes: {
        x: {
          0: { side: 'top', label: 'coding skills'} // Top x-axis.
        }
        },
        bar: { groupWidth: "90%" }
    };

    var chart1 = new google.charts.Bar(document.getElementById('top_x_div1'));
    // Convert the Classic options to Material options.
    chart1.draw(data1, google.charts.Bar.convertOptions(options1));
    };

    // 차트2
    function drawStuff2() {
    var data2 = new google.visualization.arrayToDataTable([
        ['Skill', 'Ability'],
        ["photoshop", 90],
        ["illustator", 90],
        ["sketch", 50]
    ]);

    var options2 = {
        width: 400,
        legend: { position: 'none' },
        /*chart: {
        title: 'Chess opening moves',
        subtitle: 'popularity by percentage' },*/
        axes: {
        x: {
          0: { side: 'top', label: 'design skills'} // Top x-axis.
        }
        },
        bar: { groupWidth: "90%" },
        colors: '#1b9e77'
    };

    var chart2 = new google.charts.Bar(document.getElementById('top_x_div2'));
    // Convert the Classic options to Material options.
    chart2.draw(data2, google.charts.Bar.convertOptions(options2));
    };

    // 차트3
    function drawStuff3() {
    var data3 = new google.visualization.arrayToDataTable([
        ['Skill', 'Ability'],
        ["GA", 80],
        ["GTM", 80],
        ["Data studio", 100],
        ["Word", 100],
        ["Excel", 80],
        ["PPT", 100]
    ]);

    var options3 = {
        width: 400,
        legend: { position: 'none' },
        /*chart: {
        title: 'Chess opening moves',
        subtitle: 'popularity by percentage' },*/
        axes: {
        x: {
          0: { side: 'top', label: '구글애널리틱스 및 문서 작성 skills'} // Top x-axis.
        }
        },
        bar: { groupWidth: "90%" },
        colors: '#ff5757',
    };

    var chart3 = new google.charts.Bar(document.getElementById('top_x_div3'));
    // Convert the Classic options to Material options.
    chart3.draw(data3, google.charts.Bar.convertOptions(options3));
    };
    /* // 구글차트 */
});
