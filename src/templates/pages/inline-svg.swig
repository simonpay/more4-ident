{% extends 'src/templates/layouts/base.swig' %}

{% block title %}{{meta.title}}{% endblock %}
{% block meta-description %}{{meta.description}}{% endblock %}

{% block head %}
    {% parent %}
{% endblock %}

{% block content %}

<div class="viewport">
    <div class="flip-container">
        <svg class="flip-card" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 123 595.3 595.3" enable-background="new 0 123 595.3 595.3" xml:space="preserve">


            <path class="triangle" fill="#E30613" d="M560.6 683.6L35.1 158.1C22 145 31.2 123 49.4 123H544c28.2 0 51.3 23.1 51.3 51.3v494.6C595.3 687 573.3 696.3 560.6 683.6z"/>

			{# letter M #}
				{# left #}
				<polygon class="letter-left letter-left--letter-m elephant" points="313.8,414.1 441.5,329.3 441.5,257.7 152.9,257.7 152.9,275.9 192.1,315.1 356.6,315.1 258.4,381.4 441.5,564.5 441.5,499 	"/>

				<polygon class="letter-right letter-right--letter-m elephant" points="192.1,275.9 152.9,275.9 192.1,315.1 	"/>
				<polygon class="letter-right letter-right--letter-m elephant" points="447.6,275.9 390.1,275.9 390.1,479.6 318.5,373.6 263.7,373.6 258.4,381.4 441.5,564.5 447.6,564.5 	"/>

			{# letter O #}
				{# left #}
				<path class="letter-left letter-left--letter-o elephant" d="M452.9,420.6c-2.5-84.2-62.5-138.6-149.2-144.2c-44.7-2.9-85.3,10.1-114.6,35.7l41.5,41.5c18.2-14.3,43-21.2,70.3-19.5c54.9,3.6,92.3,35.1,93.4,86.5c-0.6,28.2-12.2,50.4-31.5,65.3l41.4,41.4C433.8,502.1,451.5,465.6,452.9,420.6z"/>
				{# <text class="letter-left letter-left--letter-o" transform="matrix(-4.489659e-11 1 -1 -4.489659e-11 332.623 325.2606)" font-family="'Arial-BoldMT'" font-size="36.0132">Left</text> #}

				{# right #}
				{# <text class="letter-right letter-right--letter-o" transform="matrix(1 0 0 -1 277.7965 349.096)" font-family="'Arial-BoldMT'" font-size="36.0132">Right</text> #}
				<path class="letter-right letter-right--letter-o elephant" d="M297.7,265.4c-46.1,0-83.4,17.8-108.6,46.7l41.5,41.5c14.9-19.1,37.9-30.9,67.1-30.8c57-0.4,90.1,45.1,86.5,101c-1.6,24.8-9,46.1-21.3,62l41.4,41.4c21.8-25.7,35-60.2,37.7-100.6C447.7,338.1,390.6,265.3,297.7,265.4z"/>


			{# letter R #}
				{# left #}
	           	<path class="letter-left letter-left--letter-r elephant" d="M447,447.4c0-47.1,0-146.2,0-146.2L178,301L236,359h25.8v25.8l58,58c0,0,0,0,0,0c0-29.2,0.4-84,0.4-84h69.4c0,0,0,48.2,0,82.2c0,27.2-14.4,40.1-27.4,44.2l43.4,43.4C432.6,510.3,447,478.3,447,447.4z"/>

				{# right #}
				<polygon class="letter-right letter-right--letter-r elephant" points="178,274.5 236,274.5 236,359 178,301 		"/>
				<path class="letter-right letter-right--letter-r elephant" d="M363.7,475.9c0-14.1-14.8-33.1-43.9-33.1l-58-58h38.3l76.2-113.4h37.6v50.5l-47.1,72.2c0,0,54.5,21.7,54.5,82.1c0,20.8-5.9,38.4-15.6,52.6l-43.4-43.4C363.2,482,363.7,478.8,363.7,475.9z"/>
			

			{# letter O #}
				{# left #}
				<polygon class="letter-left letter-left--letter-e dusk" points="389,322.4 389,468.7 446.5,468.7 446,264.7 148.8,264.7 148.8,271.8 206.3,329.3 206.3,321.9 268.8,321.9 268.8,391.8 326.7,449.7 326.7,322.4 	"/>

				{# right #}
				<polygon class="letter-right letter-right--letter-e dusk" points="346.1,329.3 346.1,271.8 148.8,271.8 206.3,329.3 	"/>
				<polygon class="letter-right letter-right--letter-e dusk" points="336.8,391.8 268.8,391.8 326.7,449.7 336.8,449.7 	"/>


        </svg>
    </div>
</div>

{% endblock %}

{% block javascripts %}
    {% parent %}
{% endblock %}
