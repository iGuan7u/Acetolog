{% extends './includes/base.swig' %}

{% block content %}
    <div class="al_index_background dis_flex_center al_full_cover">
        <div class="al_pos_ab al_letter al_index_background_letter">
            {{ config.bio.substr(0, 1) }}
        </div>
        <h2 class="al_index_background_bio">
            {{ config.bio }}
        </h2>
    </div>

    <div class="al_index_container">
        <div class="al_pos_ab al_fake_background"></div>
        <div class="al_main_container">
            <div class="al_section_container dis_flex_jcenter">
                <div class="section_header">
                    LATEST PAGES
                </div>
            </div>

            <ul class="al_post_list">
                {% for item in site.posts.sort('date') %}
                    <li class="al_index_pageList_item al_index_page_seperator">
                        <div class="al_index_post_title_cnt dis_flex">
                            <div class="al_pos_ab al_letter al_index_post_title_letter">
                                {{ item.title|first|upper }}
                            </div>
                            <h2 class="al_index_post_title">
                                <a href="{{ url_for(item.link || item.path) }}">
                                    {{ item.title }}
                                </a>
                            </h2>
                            <div class="al_index_post_extra dis_flex">
                                <div class="al_index_post_date al_index_post_extra_item">
                                    {{ item.date|date('F d') }}
                                </div>
                                <div class="al_index_post_read_time">
                                    {{ min2read(item.content) }} Min Read
                                </div>
                            </div>
                        </div>
                        <div class="al_index_post_excerpt_cnt">
                            <p class="al_index_post_excerpt">
                                {{ item.excerpt + '...' }}
                            </p>
                        </div>
                        <div class="al_index_post_button_cnt dis_flex">
                            <a class="al_button al_button_theme al_index_post_button" href="{{ item.link || item.path }}">
                                READ ON
                            </a>
                            <a class="al_button al_button_transparent al_index_post_button" href="//getpocket.com/edit?url={{ config.url + '/' + postURL }}">
                                READ LATER
                            </a>
                        </div>
                    </li>
                {% endfor %}
            </ul>

            <nav class="dis_flex post-nav">
                <span class="prev">
                    {% if page.prev === true %}
                        <a href="{{ page.prev_link }}">
                            <span class="arrow"> ← </span>Newer Posts
                        </a>
                    {% endif %}
                </span>
                <span class="next">
                    {% if page.next === true %}
                        <a href="{{ page.next_link }}">
                            Older Posts<span class="arrow"> →</span>
                        </a>
                    {% endif %}
                </span>
            </nav>
        </div>
    </div>
{% endblock %}