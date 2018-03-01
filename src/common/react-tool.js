var Tool = {
    fit: {
        width: '100%',
        height: '100%'
    }

}
export default Tool;

export const Style = {
    style: {
        textCenter: 'textCenter',
        leftCenter: 'leftCenter',
        rightCenter: 'rightCenter',
        fontSize12: 'fontSize12'
    },

    styleObj: {
        textCenter: {textAlign: 'center'},
        leftCenter: {textAlign: 'left'},
        rightCenter: {textAlign: 'right'},
        fontSize12: {fontSize: '12px'}
    },

    getStyle() {
        var arg = Array.prototype.slice.apply(arguments)
        var o = {};
        arg.forEach((n, i) => {
            var obj = this.styleObj[n];
            for (var k in obj) {
                o[k] = obj[k];
            }
        })
        return o;
    }
}