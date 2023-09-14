console.log("htmlStrings.js loaded");

const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
};

//main card
const cardFormat = (card) => {
    return htmlToElement(`
    <div class="ic-DashboardCard" aria-label="${card.abrv} ${card.name}" draggable="true" style="opacity: 1;">
        <div class="ic-DashboardCard__header">
            <div class="ic-DashboardCard__header_hero" aria-hidden="true" style="background-color: ${card.color};"></div>
            <a href="${card.url}" class="ic-DashboardCard__link">
                <div class="ic-DashboardCard__header_content">
                    <h3 class="ic-DashboardCard__header-title ellipsis" title="${card.abrv} ${card.name}">
                        <span style="color: ${card.color};">${card.abrv} ${card.name}</span>
                    </h3>
                    <div class="ic-DashboardCard__header-subtitle ellipsis" title="${card.abrv}">${card.abrv}</div>
                    <div class="ic-DashboardCard__header-term ellipsis">${card.semester}</div>
                </div>
            </a>
            <div>
                <div class="ic-DashboardCard__header-button-bg" style="background-color: ${card.color}; opacity: 0;">
                </div>
                <span data-position="uuGDGCb6jgKe">
                    <button type="button" class="Button Button--icon-action-rev ic-DashboardCard__header-button"
                        aria-expanded="false" data-popover-trigger="true" data-position-target="uuGDGCb6jgKe">
                        <i class="icon-more" aria-hidden="true"></i>
                    </button>
                </span>
            </div>
        </div>
        <nav class="ic-DashboardCard__action-container" aria-label="Actions for ${card.abrv} ${card.name}">
            <!-- icons here-->
            ${["announcements", "assignment", "discussion", "files"].map((name) => {
                if (card[name] !== null) return getPath[name](card);
                else return "";
            }).join("\n")}
        </nav>
    </div>
`)
}

const announcementsPath = (card) => `
<a href="${card.announcements}" class="ic-DashboardCard__action announcements"
    title="Announcements - ${card.abrv} ${card.name}"><span
        class="screenreader-only">Announcements - ${card.abrv} ${card.name}</span>
    <div class="ic-DashboardCard__action-layout"><svg name="IconAnnouncement" viewBox="0 0 1920 1920" rotate="0"
            width="1em" height="1em" aria-hidden="true" role="presentation" focusable="false"
            class="dUOHu_bGBk dUOHu_drOs dUOHu_eXrk cGqzL_bGBk cGqzL_dIzR cGqzL_owrh" style="width: 1em; height: 1em;">
            <g role="presentation">
                <path
                    d="M1587.16235,31.2784941 C1598.68235,7.78672942 1624.43294,-4.41091764 1650.63529,1.46202354 C1676.16,7.56084707 1694.11765,30.2620235 1694.11765,56.4643765 L1694.11765,56.4643765 L1694.11765,570.459671 C1822.87059,596.662024 1920,710.732612 1920,847.052612 C1920,983.372612 1822.87059,1097.55614 1694.11765,1123.75849 L1694.11765,1123.75849 L1694.11765,1637.64085 C1694.11765,1663.8432 1676.16,1686.65732 1650.63529,1692.6432 C1646.23059,1693.65967 1641.93882,1694.11144 1637.64706,1694.11144 C1616.52706,1694.11144 1596.87529,1682.36555 1587.16235,1662.93967 C1379.23765,1247.2032 964.178824,1242.34673 960,1242.34673 L960,1242.34673 L564.705882,1242.34673 L564.705882,1807.05261 L652.461176,1807.05261 C640.602353,1716.92555 634.955294,1560.05026 715.934118,1456.37026 C768.338824,1389.2832 845.590588,1355.28791 945.882353,1355.28791 L945.882353,1355.28791 L945.882353,1468.22908 C881.392941,1468.22908 835.312941,1487.09026 805.044706,1525.71614 C736.263529,1613.58438 759.981176,1789.54673 774.776471,1849.97026 C778.955294,1866.79849 775.115294,1884.6432 764.498824,1898.30908 C753.769412,1911.97496 737.28,1919.99379 720,1919.99379 L720,1919.99379 L508.235294,1919.99379 C477.063529,1919.99379 451.764706,1894.80791 451.764706,1863.5232 L451.764706,1863.5232 L451.764706,1242.34673 L395.294118,1242.34673 C239.548235,1242.34673 112.941176,1115.73967 112.941176,959.993788 L112.941176,959.993788 L112.941176,903.5232 L56.4705882,903.5232 C25.2988235,903.5232 0,878.337318 0,847.052612 C0,815.880847 25.2988235,790.582024 56.4705882,790.582024 L56.4705882,790.582024 L112.941176,790.582024 L112.941176,734.111435 C112.941176,578.478494 239.548235,451.758494 395.294118,451.758494 L395.294118,451.758494 L959.887059,451.758494 C976.828235,451.645553 1380.36706,444.756141 1587.16235,31.2784941 Z M1581.17647,249.706729 C1386.46588,492.078494 1128.96,547.871435 1016.47059,560.746729 L1016.47059,560.746729 L1016.47059,1133.47144 C1128.96,1146.34673 1386.46588,1202.02673 1581.17647,1444.51144 L1581.17647,1444.51144 Z M903.529412,564.699671 L395.294118,564.699671 C301.891765,564.699671 225.882353,640.709082 225.882353,734.111435 L225.882353,734.111435 L225.882353,959.993788 C225.882353,1053.39614 301.891765,1129.40555 395.294118,1129.40555 L395.294118,1129.40555 L903.529412,1129.40555 L903.529412,564.699671 Z M1694.11765,688.144376 L1694.11765,1006.07379 C1759.73647,982.694965 1807.05882,920.577318 1807.05882,847.052612 C1807.05882,773.527906 1759.73647,711.5232 1694.11765,688.144376 L1694.11765,688.144376 Z"
                    fill-rule="evenodd" stroke="none" stroke-width="1"></path>
            </g>
        </svg></div>
</a>
`

const assignmentPath = (card) => `
<a href="${card.assignments}" class="ic-DashboardCard__action assignments"
    title="Assignments - ${card.abrv} ${card.name}"><span
        class="screenreader-only">Assignments - ${card.abrv} ${card.name}</span>
    <div class="ic-DashboardCard__action-layout"><svg name="IconAssignment" viewBox="0 0 1920 1920" rotate="0"
            width="1em" height="1em" aria-hidden="true" role="presentation" focusable="false"
            class="dUOHu_bGBk dUOHu_drOs dUOHu_eXrk cGqzL_bGBk cGqzL_dIzR cGqzL_owrh" style="width: 1em; height: 1em;">
            <g role="presentation">
                <path
                    d="M1468.2137,0 L1468.2137,564.697578 L1355.27419,564.697578 L1355.27419,112.939516 L112.939516,112.939516 L112.939516,1807.03225 L1355.27419,1807.03225 L1355.27419,1581.15322 L1468.2137,1581.15322 L1468.2137,1919.97177 L2.5243549e-29,1919.97177 L2.5243549e-29,0 L1468.2137,0 Z M1597.64239,581.310981 C1619.77853,559.174836 1655.46742,559.174836 1677.60356,581.310981 L1677.60356,581.310981 L1903.4826,807.190012 C1925.5058,829.213217 1925.5058,864.902104 1903.4826,887.038249 L1903.4826,887.038249 L1225.8455,1564.67534 C1215.22919,1575.17872 1200.88587,1581.16451 1185.86491,1581.16451 L1185.86491,1581.16451 L959.985883,1581.16451 C928.814576,1581.16451 903.516125,1555.86606 903.516125,1524.69475 L903.516125,1524.69475 L903.516125,1298.81572 C903.516125,1283.79477 909.501919,1269.45145 920.005294,1258.94807 L920.005294,1258.94807 Z M1442.35055,896.29929 L1016.45564,1322.1942 L1016.45564,1468.225 L1162.48643,1468.225 L1588.38135,1042.33008 L1442.35055,896.29929 Z M677.637094,1242.34597 L677.637094,1355.28548 L338.818547,1355.28548 L338.818547,1242.34597 L677.637094,1242.34597 Z M903.516125,1016.46693 L903.516125,1129.40645 L338.818547,1129.40645 L338.818547,1016.46693 L903.516125,1016.46693 Z M1637.62298,701.026867 L1522.19879,816.451052 L1668.22958,962.481846 L1783.65377,847.057661 L1637.62298,701.026867 Z M1129.39516,338.829841 L1129.39516,790.587903 L338.818547,790.587903 L338.818547,338.829841 L1129.39516,338.829841 Z M1016.45564,451.769356 L451.758062,451.769356 L451.758062,677.648388 L1016.45564,677.648388 L1016.45564,451.769356 Z"
                    fill-rule="evenodd" stroke="none" stroke-width="1"></path>
            </g>
        </svg></div>
</a>
`

const discussionPath = (card) => `
    <a href="${card.discussions}" class="ic-DashboardCard__action discussions"
        title="Discussions - ${card.abrv} ${card.name}"><span
            class="screenreader-only">Discussions - ${card.abrv} ${card.name}</span>
        <div class="ic-DashboardCard__action-layout"><svg name="IconDiscussion" viewBox="0 0 1920 1920" rotate="0"
            width="1em" height="1em" aria-hidden="true" role="presentation" focusable="false"
            class="dUOHu_bGBk dUOHu_drOs dUOHu_eXrk cGqzL_bGBk cGqzL_dIzR cGqzL_owrh" style="width: 1em; height: 1em;">
            <g role="presentation">
                <path
                    d="M677.647059,16 L677.647059,354.936471 L790.588235,354.936471 L790.588235,129.054118 L1807.05882,129.054118 L1807.05882,919.529412 L1581.06353,919.529412 L1581.06353,1179.29412 L1321.41176,919.529412 L1242.24,919.529412 L1242.24,467.877647 L677.647059,467.877647 L0,467.877647 L0,1484.34824 L338.710588,1484.34824 L338.710588,1903.24706 L756.705882,1484.34824 L1242.24,1484.34824 L1242.24,1032.47059 L1274.99294,1032.47059 L1694.11765,1451.59529 L1694.11765,1032.47059 L1920,1032.47059 L1920,16 L677.647059,16 Z M338.789647,919.563294 L903.495529,919.563294 L903.495529,806.622118 L338.789647,806.622118 L338.789647,919.563294 Z M338.789647,1145.44565 L677.726118,1145.44565 L677.726118,1032.39153 L338.789647,1032.39153 L338.789647,1145.44565 Z M112.941176,580.705882 L1129.41176,580.705882 L1129.41176,1371.40706 L710.4,1371.40706 L451.651765,1631.05882 L451.651765,1371.40706 L112.941176,1371.40706 L112.941176,580.705882 Z"
                    fill-rule="evenodd" stroke="none" stroke-width="1"></path>
            </g>
        </svg></div>
    </a>
`

const filesPath = (card) => `
<a href="${card.files}" class="ic-DashboardCard__action files"
    title="Files - ${card.abrv} ${card.name}"><span class="screenreader-only">Files - ${card.abrv} ${card.name}</span>
    <div class="ic-DashboardCard__action-layout"><svg name="IconFolder" viewBox="0 0 1920 1920" rotate="0" width="1em"
        height="1em" aria-hidden="true" role="presentation" focusable="false"
        class="dUOHu_bGBk dUOHu_drOs dUOHu_eXrk cGqzL_bGBk cGqzL_dIzR cGqzL_owrh" style="width: 1em; height: 1em;">
        <g role="presentation">
            <path
                d="M1807.05882,1637.70588 C1807.05882,1668.87765 1781.64706,1694.17647 1750.58824,1694.17647 L169.411765,1694.17647 C138.352941,1694.17647 112.941176,1668.87765 112.941176,1637.70588 L112.941176,225.941176 L703.849412,225.941176 L854.4,451.823529 L225.882353,451.823529 L225.882353,564.764706 L1807.05882,564.764706 L1807.05882,1637.70588 Z M990.268235,451.823529 L764.385882,113 L-5.68434189e-14,113 L-5.68434189e-14,1637.70588 C-5.68434189e-14,1731.10824 76.0094118,1807.11765 169.411765,1807.11765 L1750.58824,1807.11765 C1843.99059,1807.11765 1920,1731.10824 1920,1637.70588 L1920,451.823529 L990.268235,451.823529 Z"
                fill-rule="evenodd" stroke="none" stroke-width="1"></path>
        </g>
    </svg></div>
</a>
`

const getPath = {
    announcements: announcementsPath,
    assignment: assignmentPath,
    discussion: discussionPath,
    files: filesPath,
}
