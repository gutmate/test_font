var dayMsg = [
    {
        msg: '너 자신을 알라.',
        name: '소크라테스'
    },
    {
        msg: '인생의 위대한 목표는 지식이 아니라 행동이다.',
        name: '헉슬리'
    },
    {
        msg: '삶은 호흡하는 것이 아니라 행위를 하는 것이다.',
        name: '루소'
    },
    {
        msg: '우리의 인생은 우리가 노력한 만큼 가치가 있다.',
        name: '모리악'
    },
    {
        msg: '사랑하며 가난한 것이 애정없는 부유함보다 훨씬 낫다.',
        name: '모리스'
    }
];
/**
 * @var fontData
 * @name {string} @font-face에 지정한 폰트 이름과 일치
 * @fontWeight {array} @font-face에 지정한 폰트 굵기
 */
var fontData = [
    {
        name: 'NanumWeb',
        fontWeight: [400, 600]
    },
    {
        name: 'NotoSansKRWeb',
        fontWeight: [100, 300, 350, 400, 500, 600, 900]
    },
    {
        name: 'RouisWeb',
        fontWeight: [400, 600]
    }
];

var font = {
    renderList: function (target) {
        var _target = document.getElementById(target); // render 대상
        var _family = fontData;
        var _length = _family.length;
        var _temp_dep1 = [];
        var _temp_dep2 = [];
        var _fontSize = '18px';
        var _fontColor = '#000';

        for (var idx = 0; idx < _length; idx++) {
            //font family 개수만큼 리스트 생성
            var el = _family[idx];
            var elFamily = el.name;
            var elWeight = el.fontWeight;
            var _l = elWeight.length;
            var word = '삶은 호흡하는 것이 아니라 행위를 하는 것이다. - To live is not to breathe but to act.';

            _temp_dep2 = []; // 초기화
            _temp_dep2.push('<div class="font-wrap" style="font-family: ' + elFamily + '">');
            _temp_dep2.push('    <h2 class="font-name">&lt;' + elFamily + '&gt;</h2>');
            _temp_dep2.push('    <ul class="font-list">');

            for (var idx2 = 0; idx2 < _l; idx2++) {
                //font weight 개수만큼 리스트 생성
                var listFontWeight = elWeight[idx2];
                var _htmlList = [];
                _htmlList.push('       <li style="font-weight: ' + listFontWeight + '; font-size: ' + _fontSize + '; color: ' + _fontColor + '">' + word + '</li>');
                _htmlList.push('         <p class="qt">' + elFamily + ', ' + listFontWeight + ', ' + _fontSize + '</p>');
                _htmlList.push('       </li>');
                _htmlList = _htmlList.join('\n');
                _temp_dep2.push(_htmlList);
            }

            _temp_dep2.push('    </ul><!-- //font-list -->');
            _temp_dep2.push('</div><!-- //font-wrap -->');
            _temp_dep2 = _temp_dep2.join('\n');
            _temp_dep1.push(_temp_dep2);
        }
        _temp_dep1 = _temp_dep1.join('\n');

        _target.innerHTML = _temp_dep1;
    }
};

font.renderList('fontWrap');