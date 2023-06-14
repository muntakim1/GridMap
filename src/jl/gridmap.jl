# AUTO GENERATED FILE - DO NOT EDIT

export gridmap

"""
    gridmap(;kwargs...)

A GridMap component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `className` (String; optional): Classname .
- `data` (Array of Dicts; required): Dataset.
- `height` (Real; optional): The value displayed in the input.
- `show_axes` (Bool; optional): Dash-assigned callback that should be called to report property changes
to Dash, to make them available for callbacks.
- `style` (Dict; optional): The value displayed in the input.
- `width` (Real; optional): The value displayed in the input.
"""
function gridmap(; kwargs...)
        available_props = Symbol[:id, :className, :data, :height, :show_axes, :style, :width]
        wild_props = Symbol[]
        return Component("gridmap", "GridMap", "gridmap", available_props, wild_props; kwargs...)
end

