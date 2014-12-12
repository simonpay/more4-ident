{% extends 'src/templates/layouts/base.swig' %}

{% block title %}{{meta.title}}{% endblock %}
{% block meta-description %}{{meta.description}}{% endblock %}

{% block head %}
    {% parent %}
{% endblock %}

{% block content %}

<div class="viewport">
    <div class="svg-container">

        <svg class="svg-tri" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 123 595.3 595.3" enable-background="new 0 123 595.3 595.3" xml:space="preserve">
            <path fill="#E30613" d="M560.6 683.6L35.1 158.1C22 145 31.2 123 49.4 123H544c28.2 0 51.3 23.1 51.3 51.3v494.6C595.3 687 573.3 696.3 560.6 683.6z"/>
        </svg>

    </div>
</div>

{% endblock %}

{% block javascripts %}
    {% parent %}
{% endblock %}
