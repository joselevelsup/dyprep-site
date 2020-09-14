import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

export default function SchoolCalendar(){
	const localizer = momentLocalizer(moment);
	return (
		<div style={{ marginTop: 10, height: "90vh" }}>
			<Calendar
				localizer={localizer}
				events={[]}
				defaultDate={new Date()}
				defaultView="month"
				step={60}
				showMultiDayTimes
				views={["month", "day"]}
				startAccessor="start"
				endAccessor="end"
			/>
		</div>
	)
}
