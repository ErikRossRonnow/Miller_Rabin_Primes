# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Miller_Rabin_Primes'
copyright = '2024, Erik Ross-Rønnow, Ivan Fan'
author = 'Erik Ross-Rønnow, Ivan Fan'
release = '0.0.1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
   'sphinx.ext.duration',
   'sphinx.ext.doctest',
   'sphinx.ext.autodoc',
   'sphinx.ext.autosummary',
   "myst_nb",
   'sphinx_togglebutton',
]

html_static_path = ["_static"]
html_css_files = ["custom.css"]
templates_path = ['_templates']

exclude_patterns = []



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_book_theme'
html_static_path = ['_static']

source_suffix = {
    '.rst': 'restructuredtext',
    '.txt': 'myst-nb',
    '.md': 'myst-nb',
    '.ipynb': 'myst-nb',
    '.myst': 'myst-nb',
}

html_theme_options = {
    # "announcement": "<b>👏👏A warm welcome to Ivan Fan!!!👏👏</b>",
    "use_repository_button": True,
    "repository_provider": "github",
    "repository_url": "https://github.com/ivan-fan-dk/ivan101",
    "use_fullscreen_button": True,
    "use_download_button": True,
    "home_page_in_toc": True,
    "use_sidenotes": True,
    "show_navbar_depth": 1,
    "collapse_navbar": False,
    # "use_edit_page_button": True,
    # "header_links_before_dropdown": 4,
    # "navbar_align": "content",
    # "navbar_center": ["navbar-nav"],
    # "icon_links": _icon_links,
}

html_title = "Miller Rabin Primality Test"

# html_logo = "_static/logo.png"

# html_favicon = "_static/favicon.png"

html_last_updated_fmt = ""

html_show_sphinx = False

html_show_copyright = True

myst_enable_extensions = [
    "amsmath",
    "attrs_inline",
    "colon_fence",
    "deflist",
    "dollarmath",
    "fieldlist",
    "html_admonition",
    "html_image",
    "linkify",
    "replacements",
    "smartquotes",
    "strikethrough",
    "substitution",
    "tasklist",
]