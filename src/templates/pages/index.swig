{% extends 'src/templates/layouts/base.swig' %}

{% block title %}{{meta.title}}{% endblock %}
{% block meta-description %}{{meta.description}}{% endblock %}

{% block head %}
    {% parent %}
{% endblock %}

{% block content %}
<div class="viewport">
    <div class="svg-container">

        <!-- <object id="test-tri" class="svg-tri svg-tri--1" type="image/svg+xml" data="img/triangle.svg"></object> -->
        <object class="svg-tri" type="image/svg+xml" data="img/triangle.svg"></object>
        <!-- <object class="svg-tri svg-tri--2" type="image/svg+xml" data="img/triangle.svg"></object> -->

<!--         <svg class="svg-tri svg-tri--1" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 123 595.3 595.3" enable-background="new 0 123 595.3 595.3" xml:space="preserve">
            <path fill="#E30613" d="M560.6 683.6L35.1 158.1C22 145 31.2 123 49.4 123H544c28.2 0 51.3 23.1 51.3 51.3v494.6C595.3 687 573.3 696.3 560.6 683.6z"/>
        </svg>
 -->    <!-- </div> -->
    <!-- <div class="svg-container"> -->
<!--        <svg class="svg-tri svg-tri--2" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 123 595.3 595.3" enable-background="new 0 123 595.3 595.3" xml:space="preserve">
            <path fill="#E30613" d="M560.6 683.6L35.1 158.1C22 145 31.2 123 49.4 123H544c28.2 0 51.3 23.1 51.3 51.3v494.6C595.3 687 573.3 696.3 560.6 683.6z"/>
        </svg> -->
    </div>
</div>

<!-- <div class="banner">
    <div class="slide">
        <div class="more4-logo-container">
            {# <div class="tri"></div> #}


            {# <embed src="img/triangle.svg" width="200" height="200" /> #}


            <div class="square"></div>

        </div>
    </div>
</div> -->

{% endblock %}

{% block javascripts %}
    {% parent %}
{% endblock %}