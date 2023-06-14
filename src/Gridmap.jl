
module Gridmap
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/gridmap.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "gridmap",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "gridmap.min.js",
    external_url = "https://unpkg.com/gridmap@0.0.1/gridmap/gridmap.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "gridmap.min.js.map",
    external_url = "https://unpkg.com/gridmap@0.0.1/gridmap/gridmap.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
