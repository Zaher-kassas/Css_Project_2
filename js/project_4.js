
var x=0;
function click_nav_list()
{
    x++;
    if(x%2!=0)
    document.getElementById("nav_links").style.transform="scale(1,1)";
    else
    document.getElementById("nav_links").style.transform="scale(1,0)";
}
document.getElementById("nav_list").onclick=click_nav_list;
//----------------------------------------------------------------------------
function show_dropdowm_title1_list()
{
    document.getElementById("dropdown_item3").style.transform="scale(1,1)";
}
function hide_dropdowm_title1_list()
{
    document.getElementById("dropdown_item3").style.transform="scale(1,0)";
}
document.getElementById("dropdown_title1").onmouseenter=show_dropdowm_title1_list;
document.getElementById("dropdown_title1").onmouseleave=hide_dropdowm_title1_list;
//----------------------------------------------------------------------------------
function show_dropdowm_title2_list()
{
    document.getElementById("dropdown_item4").style.transform="scale(1,1)";
}
function hide_dropdowm_title2_list()
{
    document.getElementById("dropdown_item4").style.transform="scale(1,0)";
}
document.getElementById("dropdown_title2").onmouseenter=show_dropdowm_title2_list;
document.getElementById("dropdown_title2").onmouseleave=hide_dropdowm_title2_list;
//--------------------------------------------------------------------------------------
function show_dropdowm_title3_list()
{
    document.getElementById("dropdown_item5").style.transform="scale(1,1)";
}
function hide_dropdowm_title3_list()
{
    document.getElementById("dropdown_item5").style.transform="scale(1,0)";
}
document.getElementById("dropdown_title3").onmouseenter=show_dropdowm_title3_list;
document.getElementById("dropdown_title3").onmouseleave=hide_dropdowm_title3_list;