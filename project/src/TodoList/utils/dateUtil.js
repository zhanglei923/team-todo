import moment from 'moment';
let dateUtil = {
    getTimeSpan:(dateMom, todayMom, is)=>{
        if(is==='begin') dateMom.hours(9-1)
        if(is==='end') dateMom.hours(19-1)
        const dateDate = dateMom.toDate();
        //todayMom.hours(19-1)
        const todayDate = todayMom.toDate();
        //console.log('?', dateDate*1 , todayDate*1)
        let offsetMs = dateDate - todayDate;
        let day = offsetMs / (24*60*60*1000)
        day=Math.round(day*10)
        let dayText = (day/10)+'';
        return dayText;
    }
};
export default dateUtil;
