document.getElementById("walk_in_name").style.display = "none";
document.getElementById("walk_in_cnic").style.display = "none";
document.getElementById("walk_in_phone").style.display = "none";
document.getElementById("walk_in_cnicf").style.display = "none";
document.getElementById("walk_in_cnicb").style.display = "none";
document.getElementById("walk_in_thumb").style.display = "none";
document.getElementById("sup_main").style.display = "block";
document.getElementById("sup_type").onchange = function () {
    var sub_type = document.getElementById("sup_type").value;
    if (sub_type == "Walk In Supplier") {
        document.getElementById("walk_in_name").style.display = "block";
        document.getElementById("walk_in_cnic").style.display = "block";
        document.getElementById("walk_in_phone").style.display = "block";
        document.getElementById("walk_in_cnicf").style.display = "block";
        document.getElementById("walk_in_cnicb").style.display = "block";
        document.getElementById("walk_in_thumb").style.display = "block";
        document.getElementById("sup_main").style.display = "none";
    } else {
        document.getElementById("walk_in_name").style.display = "none";
        document.getElementById("walk_in_cnic").style.display = "none";
        document.getElementById("walk_in_phone").style.display = "none";
        document.getElementById("walk_in_cnicf").style.display = "none";
        document.getElementById("walk_in_cnicb").style.display = "none";
        document.getElementById("walk_in_thumb").style.display = "none";
		document.getElementById("sup_main").style.display = "block";
    }
};
