function compare_char(a, b) {
    var a_type = get_char_type(a),
        b_type = get_char_type(b);
    if (a_type === b_type && a_type < 4) {
        return a.charCodeAt(0) - b.charCodeAt(0);
    } else if (a_type === b_type && a_type === 4) {
        return a.localeCompare(b);
    } else {
        return a_type - b_type;
    }
}

function get_char_type(a) {
    var return_code = {
        nul: 0,
        symb: 1,
        number: 2,
        upper: 3,
        lower: 4,
        other: 5
    }
    if (a === '') {
        return return_code.nul; //空
    } else if (a.charCodeAt(0) > 127) {
        return return_code.other;
    } else if (a.charCodeAt(0) > 122) {
        return return_code.symb;
    } else if (a.charCodeAt(0) > 96) {
        return return_code.lower;
    } else if (a.charCodeAt(0) > 90) {
        return return_code.symb;
    } else if (a.charCodeAt(0) > 64) {
        return return_code.upper;
    } else if (a.charCodeAt(0) > 58) {
        return return_code.symb;
    } else if (a.charCodeAt(0) > 47) {
        return return_code.number;
    } else {
        return return_code.symb;
    }
}

function do_sort(a, b) {
    let max_length = Math.max(a.length, b.length),
        compare_result = 0,
        i = 0;
    while (compare_result === 0 && i < max_length) {
        compare_result = compare_char(a.charAt(i), b.charAt(i));
        i++;
    }
    console.log(compare_result);
    return compare_result;
}

function test(a){
    console.log('测试成功');
    console.log(a);
}

export default do_sort;