var dayMsg = [{
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
var fontGroup = [
    {
        name: 'NotoSansCJKkr',
        fontWeight: [100, 300, 350, 400, 500, 600, 900]
    }
];


var font = {
    getCssInfo(element, property) {
        return window.getComputedStyle(element, null).getPropertyValue(property);
    },
    getFontInfo(element) {
        var objStyle = window.getComputedStyle(element, null);
        var _info = {};
        _info.fontFamily = objStyle.getPropertyValue('font-family');
        _info.fontWeight = objStyle.getPropertyValue('font-weight');
        _info.fontSize = objStyle.getPropertyValue('font-size');

        return _info;
    },
    renderInfo(element) {
        var list = document.querySelectorAll(element);
        var listLength = list.length;
        var _tmp, tag, text;

        for (var idx = 0; idx < listLength; idx++) {
            var el = list[idx];
            _tmp = getFontInfo(el);

            tag = document.createElement('p');
            tag.classList.add('qt');
            text = document.createTextNode('(' + _tmp.fontFamily + ', ' + _tmp.fontWeight + ', ' + _tmp.fontSize + ')');
            tag.appendChild(text);
            el.appendChild(tag);
        }
    },
    renderList() {

    }
};

font.renderInfo('.font-type-a li');
font.renderInfo('.font-type-b li');