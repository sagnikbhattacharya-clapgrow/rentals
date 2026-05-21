import frappe

@frappe.whitelist(allow_guest=True)


def getValue():
    return "dsjkcnsdocjklsml"



def throw_emoji(doc, event):
    frappe.throw("💩")