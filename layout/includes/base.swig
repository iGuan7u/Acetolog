
<!DOCTYPE html>
<html lang="{{ config.language }}">
    <head>
        {% include "./head.swig" %}
        {% block extra_style %}{% endblock  %}
    </head>
    <body>
        {% include "./headerbar.swig" %}
        {% include "./sidebar.swig" %}
        {% block content %}{% endblock %}
        {% include "./footer.swig" %}
        <script type="text/javascript" async="async" src="{{ url_for('/javascripts/acelog.js') }}"></script>
        {% include "./plugins/mtaTencentAnalytice.swig" %}
        {% include "./plugins/baiduAnalytice.swig" %}
        {% include "./plugins/googleAnalytice.swig" %}
        {% include "./plugins/plugin.swig" %}
    </body>
</html>
        