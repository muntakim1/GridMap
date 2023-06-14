# AUTO GENERATED FILE - DO NOT EDIT

#' @export
gridMap <- function(id=NULL, className=NULL, data=NULL, height=NULL, show_axes=NULL, style=NULL, width=NULL) {
    
    props <- list(id=id, className=className, data=data, height=height, show_axes=show_axes, style=style, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GridMap',
        namespace = 'gridmap',
        propNames = c('id', 'className', 'data', 'height', 'show_axes', 'style', 'width'),
        package = 'gridmap'
        )

    structure(component, class = c('dash_component', 'list'))
}
