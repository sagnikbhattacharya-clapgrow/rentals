// Copyright (c) 2026, Sagnik and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    //To Check
        onload(frm){

        },
        setup(frm){

        },


	refresh(frm) {

        if(frm.doc.status === "New"){
            frm.add_custom_button("Accept",()=>{
            //Pop up
            frappe.show_alert("YOu accepted the ride")

            //status => "Accepted"
            frm.set_value("status","Accepted")

            //Save the form
            frm.save();
        })

        frm.add_custom_button("Reject",()=>{

            frappe.show_alert("You rejected the ride")

            //status => "Accepted"
            frm.set_value("status","Rejected")

            //Save the form
            frm.save();
        })

        }

	},
    status(frm){
        console.log("On refresh")
    }
});
