import React, { useState } from "react";
import Head from "next/head"
import { Modal } from "react-responsive-modal";
import staffList from "../content/staff.json";
import { chunkArray, fakeArray } from "../utils";
import Emoji from "../components/emoji";

export default function Staff(){
	const chunked = chunkArray(staffList.staff, 5);
	const [ staffMember, setActiveStaffMember ] = useState(null);
	const [ staffId, setStaffId ] = useState(0);
	const [ modalState, toggleModalState ] = useState(false);
	
	const toggleStaffModal = (staffMember) => {
		setActiveStaffMember(staffMember);
		toggleModalState(!modalState);
	}

	return (
		<>
			<Head>
				<title>DYPrep - Teachers and Staff</title>
			</Head>
			<div id="main" className="staffContainer">
				<h2 className="text-3xl text-center">
					Meet our lovely staff! <Emoji symbol="🎓" />
				</h2>
				<div className="staff-body">
					{
						chunked.map(a => (
							<>
								<div className="grid grid-cols-5 gap-2">
									{
										a.map(staff => (
											<div style={{ backgroundImage: "url(https://placehold.it/300x250)" }} onMouseEnter={() => setStaffId(staff.id)} onClick={() => toggleStaffModal(staff)} className="singleStaffMember" onMouseLeave={() => setStaffId(null)}>
												{
													staffId == staff.id ?
														<div className="hoverStaff">
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
						<div className="p-6">
							<h3>About {staffMember.optInFullName ? `${staffMember.firstName} ${staffMember.lastName}`: `${staffMember.preferredName}`}</h3>
						</div>
						<div className="p-6">
							<p>{staffMember.about}</p>
						</div>
					</Modal>
				}
				
			</div>
		</>
	)
}
