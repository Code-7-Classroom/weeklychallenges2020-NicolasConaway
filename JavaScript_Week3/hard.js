function security() {
    var pii = {
        name: 'Nicolas Conaway',
        snn: 999999999,
        dob: '09/07/2000'
    };
    return function () {
       console.log(pii.name, pii.dob);
    }
}
function infoSearch() {
    var privateInfo = security();
    privateInfo();
}
infoSearch();