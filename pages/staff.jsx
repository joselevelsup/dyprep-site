import React from "react";
import Head from "next/head"
import { Modal } from "react-responsive-modal";
import styles from "../styles/staff.module.css";
import staffList from "../content/staff.json";
import { chunkArray, fakeArray } from "../utils";

export default function Staff(){
	const chunked = chunkArray(staffList.staff, 5);
	const [ staffMember, setActiveStaffMember ] = useState(null);
	const [ modalState, toggleModalState ] = useState(false);

	const enableHoverOverStaff = (staffMemberId) => {
		setActiveStaffMember(staffMemberId);
	}
	
	const toggleStaffModal = (staffMember) => {
		setActiveStaffMember(staffMember);
		toggleModalState(!modalState);
	}

	return (
		<>
			<Head>
				<title>DYPrep - Teachers and Staff</title>
			</Head>
			<div id="main" className={styles.staffContainer}>
				<h2 className="text-center">
					Meet our lovely staff!
				</h2>
				<div className="staff-body">
					{
						chunked.map(a => (
							<>
								<div className="grid grid-cols-5 gaps-2">
									{
										a.map(staff => (
											<div style={{ backgroundImage: "url(https://placehold.it/300x250)" }} onMouseEnter={() => enableHoverOverStaff(staff.id)} onClick={() => toggleStaffModal(staff.id)} className={styles.singleStaffMember} onMouseLeave={() => enableHoverOverStaff(null)}>
												{
													staffMember == staff.id ?
														<div className={styles.hoverStaff}>
															<div>
																<h4>{staff.optInFullName ? `${staff.firstName} ${staff.lastName}` : staff.preferredName}</h4>
																<h5>{staff.title}</h5>
															</div>
														</div>
														:
														<div/>
												}
											</div>
										))
									}
								</div>
								<br/>
							</>
						))
					}
				</div>
				{
					(modalState && staffMember) &&
					<Modal 
						open={modalState}
						onClose={() => toggleStaffModal(null)}
						center
					>
						<h3>About {staffMember.optInFullName ? `${staffMember.firstName} ${staffMember.lastName}`: `${staffMember.preferredName}`}</h3>
						<p>{staffMember.about}</p>
					</Modal>
				}
				
			</div>
		</>
	)
}
