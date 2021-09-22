import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)
const myEventsList =
    [
        {
            'title' : '참가신청',
            'allDay' : false,
            'start' : new Date(2021, 7, 31, 23, 59),
            'end'   : new Date(2021, 7, 31, 23, 59),
            'color'  : 'steelblue'
        },
        {
          'title' : '오리엔테이션',
          'allDay' : false,
          'start' : new Date(2021, 8, 3, 10, 0),
          'end'   : new Date(2021, 8, 3, 11, 10),
          'color'  : 'steelblue'
        },
        {
            'title' : '기능분석',
            'allDay' : false,
            'start' : new Date(2021, 8, 6, 10, 0),
            'end'   : new Date(2021, 8, 12, 11, 10),
            'color'  : 'gray'
        },
        {
            'title' : '추석연휴',
            'allDay' : false,
            'start' : new Date(2021, 8, 20, 0, 0),
            'end'   : new Date(2021, 8, 22, 23, 59),
            'color' : 'pink'
        },

        {
            'title' : '1차 출품작 접수마감',
            'allDay' : false,
            'start' : new Date(2021, 9, 25, 23, 59), // 10.00 AM
            'end'   : new Date(2021, 9, 25, 23, 59), // 2.00 PM
            'color' : 'steelblue'
        },

        {
            'title' : '1차 평가 시연',
            'allDay' : false,
            'start' : new Date(2021, 9, 27, 23, 59), // 10.00 AM
            'end'   : new Date(2021, 9, 27, 23, 59), // 2.00 PM
            'color' : 'steelblue'
        },
        {
            'title' : '2차 평가 발표/시연',
            'allDay' : false,
            'start' : new Date(2021, 9, 29, 0, 0), // 10.00 AM
            'end'   : new Date(2021, 10, 2, 23, 59), // 2.00 PM
            'color' : 'gray'
        },
        {
            'title' : '3차 평가 발표/시연',
            'allDay' : false,
            'start' : new Date(2021, 10, 19, 0, 0), // 10.00 AM
            'end'   : new Date(2021, 10, 24, 23, 59), // 2.00 PM
            'color' : 'gray'
        },
    ]
const korMonth = [{
    kor : '1월',
    en  : ''
}]
const onClickHandler = () =>{
    alert('click')
}

const MyCalendar = props => {
   
    // const disableLoading = () =>{
    //     const container = document.querySelector('.loading-logo');
    //     container.style.opacity = 0;
    // }
    // useEffect(()=>{
    //     document.addEventListener("DOMContentLoaded", disableLoading);
    //     return ()=>{
    //         document.removeEventListener("DOMContentLoaded", disableLoading)
    //     }
    // })
    return(
    <div>
        <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            defalutView ="month"
            endAccessor="end"
            style={{ height: 800 }}
            eventPropGetter={
                (event, start, end, isSelected) => {
                    let newStyle = {
                        backgroundColor: event.color,
                        color: 'white',
                        borderRadius: "3px",
                        border: "1px",
                        fontWeight : 700
                    };
                    return {
                        className: "",
                        style: newStyle
                    };
                }
            }
            onSelectEvent={event => alert(event.title)}
            // onSelectSlot={this.handleSelect}
        />
    </div>
    )
}
export default MyCalendar;