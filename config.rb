#
# COMPASS
# --------------------------------------------------------------------------------------------
# Configuration
# http://compass-style.org/help/tutorials/configuration-reference/
# --------------------------------------------------------------------------------------------
# DEVELOPMENT
# $ compass watch
# --------------------------------------------------------------------------------------------
# PRODUCTION
# $ compass compile -e production -s compressed --no-line-comments --force --trace --time
# --------------------------------------------------------------------------------------------
#
# Config is loaded when you begin "compass watch".
# If you make a change to the config file, you've to re-start the "compass watch".
# --------------------------------------------------------------------------------------------
#

# Can be :stand_alone or :rails. Defaults to :stand_alone
project_type = :stand_alone

# paths
http_path       = "/"
css_dir         = ""
sass_dir        = ""

# output option: nested, expanded, compact, compressed
output_style = :expanded

# The environment mode.
# Defaults to :production, can also be :development
# Use :development to see line numbers, file names, etc
environment = :production

# Enable/Disable line comments
line_comments = false

# Enable relative paths to assets via compass helper functions.
relative_assets = true

# disable the asset cache buster
asset_cache_buster :none

# Color output
color_output = true

# SASS core
Sass::Script::Number.precision = 5