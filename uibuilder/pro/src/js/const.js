var page_history = null;
var page_count = null;
var page_current = null;
var page_previous = null;
var ip_address = null;
var app_name = null;
var status_inspect = 0; // enable 1
var element_id_selected = null;
var page_opened = null;
var data_page_id = null;
var font_color = null;
var border_color_top = null;
var border_color_right = null;
var border_color_bottom = null;
var border_color_left = null;

var class_name_autocomplete = [
    "text-align-left",
    "text-align-right",
    "text-align-center",
    "text-align-justify",
    "margin",
    "margin-left",
    "margin-right",
    "margin-top",
    "margin-bottom",
    "margin-horizontal",
    "margin-vertical",
    "margin-half",
    "margin-left-half",
    "margin-right-half",
    "margin-top-half",
    "margin-bottom-half",
    "margin-horizontal-half",
    "margin-vertical-half",
    "no-margin",
    "no-margin-left",
    "no-margin-right",
    "no-margin-top",
    "no-margin-bottom",
    "no-margin-horizontal",
    "no-margin-vertical",
    "padding",
    "padding-left",
    "padding-right",
    "padding-top",
    "padding-bottom",
    "padding-horizontal",
    "padding-vertical",
    "padding-half",
    "padding-left-half",
    "padding-right-half",
    "padding-top-half",
    "padding-bottom-half",
    "padding-horizontal-half",
    "padding-vertical-half",
    "no-padding",
    "no-padding-left",
    "no-padding-right",
    "no-padding-top",
    "no-padding-bottom",
    "no-padding-horizontal",
    "no-padding-vertical",
    "float-left",
    "float-right",
    "float-none",
    "display-block",
    "display-inline",
    "display-inline-block",
    "display-flex",
    "display-inline-flex",
    "display-none",
    "flex-direction-row",
    "flex-direction-row-reverse",
    "flex-direction-column",
    "flex-direction-column-reverse",
    "justify-content-flex-start",
    "justify-content-center",
    "justify-content-flex-end",
    "justify-content-space-between",
    "justify-content-space-around",
    "justify-content-space-evenly",
    "justify-content-stretch",
    "justify-content-start",
    "justify-content-end",
    "justify-content-left",
    "justify-content-right",
    "align-content-flex-start",
    "align-content-flex-end",
    "align-content-center",
    "align-content-space-between",
    "align-content-space-around",
    "align-content-stretch",
    "align-items-flex-start",
    "align-items-flex-end",
    "align-items-center",
    "align-items-stretch",
    "align-self-flex-start",
    "align-self-flex-end",
    "align-self-center",
    "align-self-stretch",
    "flex-shrink-0",
    "flex-shrink-1",
    "flex-shrink-2",
    "flex-shrink-3",
    "flex-shrink-4",
    "flex-shrink-5",
    "flex-shrink-6",
    "flex-shrink-7",
    "flex-shrink-8",
    "flex-shrink-9",
    "flex-shrink-10",
    "button",
    "button-fill",
    "button-outline",
    "button-raised",
    "button-round"
]

