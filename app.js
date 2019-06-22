(function() {
  const navbarEl = document.querySelector(".navbar");
  const catNameEl = document.querySelector("#catName");
  const countEl = document.querySelector("#count");
  const catImgContainerEl = document.querySelector(".image-container");
  const catCreditBadgeEl = document.querySelector("#creditBadge");

  // All cat details blueprint
  const catDetails = [
    {
      name: "Cherry",
      alt: "A sleepy cat name Cherry",
      url:
        "https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1602&q=80",
      creditBadge:
        '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@alexandruz?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Alexandru Zdrobău"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Alexandru Zdrobău</span></a>'
    },
    {
      name: "Tubby",
      alt: "A brown cat name Tubby",
      url:
        "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      creditBadge:
        '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@jaehunpark?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Jae Park"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Jae Park</span></a>'
    },
    {
      name: "Katya",
      alt: "A russian blue cat name Katya",
      url:
        "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=663&q=80",
      creditBadge:
        '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@snowboardinec?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Max Baskakov"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Max Baskakov</span></a>'
    },
    {
      name: "Wendy",
      alt: "A grey cat name Wendy",
      url:
        "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      creditBadge:
        '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@miklevasilyev?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Mikhail Vasilyev"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Mikhail Vasilyev</span></a>'
    },
    {
      name: "Clinton",
      alt: "A black cat name Clinton",
      url:
        "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      creditBadge:
        '<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@raquelpedrotti?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Raquel Pedrotti"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Raquel Pedrotti</span></a>'
    }
  ];
  // A copy of cats details above, plus a click <count>,
  // so we called it <catClickerDetails>,
  // which will be later given to a proper rendering function
  const catClickerDetails = catDetails.map(catDetail => {
    return {
      ...catDetail,
      count: 0
    };
  });

  // Render all Navbar items using the given "cat clicker detail".
  const renderNavbarItem = () => {
    catClickerDetails.forEach(catClickerDetail => {
      const navbarItemEl = document.createElement("li");
      navbarItemEl.textContent = catClickerDetail.name;
      // In each iteration of forEach, we have the access to each "cat clicker detail".
      // then, we preserve it in the Closure, as we pass it to the IFFE,
      // which will later be used by the inner callback when a nav item is clicked.
      navbarItemEl.addEventListener(
        "click",
        (function() {
          return () => {
            renderCatHeader(catClickerDetail);
            renderCatImg(catClickerDetail);
            renderCreditBadge(catClickerDetail);
          };
        })(catClickerDetail)
      );

      navbarEl.appendChild(navbarItemEl);
    });
  };

  // Render a cat's name and count using the given "cat clicker detail".
  const renderCatHeader = catClickerDetail => {
    catNameEl.textContent = `${catClickerDetail.name}: `;
    countEl.textContent = catClickerDetail.count;
  };

  // Render a cat image, and attach a click event listener using the given "cat clicker detail".
  const renderCatImg = catClickerDetail => {
    const catImgEl = document.createElement("img");
    catImgEl.setAttribute("src", catClickerDetail.url);
    catImgEl.setAttribute("alt", catClickerDetail.alt);
    catImgEl.addEventListener("click", () => {
      // This is the only place we make a SIDE EFFECT to the given data, <catClickerDetail>.
      // It has a REFERENCE to the each "cat clicker detail" in the <catClickerDetails>,
      // which we can directly use.
      catClickerDetail.count++;
      countEl.textContent = catClickerDetail.count;
    });

    catImgContainerEl.innerHTML = "";
    catImgContainerEl.appendChild(catImgEl);
  };

  // Render a credit badge using the given "cat clicker detail".
  const renderCreditBadge = catClickerDetail => {
    catCreditBadgeEl.innerHTML = catClickerDetail.creditBadge;
  };

  window.onload = () => {
    renderNavbarItem();

    // Initially, we render the first "cat clicker detail"
    const initialCatClickerDetail = catClickerDetails[0];
    renderCatHeader(initialCatClickerDetail);
    renderCatImg(initialCatClickerDetail);
    renderCreditBadge(initialCatClickerDetail);
  };
})();
