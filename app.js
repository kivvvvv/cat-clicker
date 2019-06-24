(function() {
  const model = {
    // All cat details blueprint
    catDetails: [
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
    ],
    // A copy of <catsDetails> above, plus a click <count>,
    // so it is named, <catClickerDetails>.
    catClickerDetails: null,
    currentCatDetail: null,
    init: function() {
      this.catClickerDetails = this.catDetails.map(catDetail => {
        return {
          ...catDetail,
          count: 0
        };
      });
    }
  };

  const octopus = {
    init: function() {
      model.init();
      catNavbarView.init();
      catClickerView.init();
      viewAdminAreaForm.init();
      viewAdminArea.init();
    },
    getCatClickerDetails: () => model.catClickerDetails,
    setCurrentCatDetail: currentCatDetail =>
      (model.currentCatDetail = currentCatDetail),
    getCurrentCatDetail: () => model.currentCatDetail,
    editCurrentCatDetail: function({ name, alt, url, creditBadge, count }) {
      const currentCatDetail = this.getCurrentCatDetail();
      currentCatDetail.name = name;
      currentCatDetail.alt = alt;
      currentCatDetail.url = url;
      currentCatDetail.creditBadge = creditBadge;
      currentCatDetail.count = count;

      this.setCurrentCatDetail(currentCatDetail);
    }
  };

  const catNavbarView = {
    init: function() {
      this.navbarEl = document.querySelector(".navbar");
      this.navbarEl.innerHTML = "";
      // Render all Navbar items
      octopus.getCatClickerDetails().forEach(catClickerDetail => {
        const navbarItemEl = document.createElement("li");
        navbarItemEl.textContent = catClickerDetail.name;
        // In each iteration of forEach, we have the access to each item in <catClickerDetails>.
        // It is called <catClickerDetail>.
        // Then, we preserve it in the Closure by passing it to the IFFE,
        // which will later be used by the inner callback when a nav item is clicked.
        navbarItemEl.addEventListener(
          "click",
          (function() {
            return () => {
              catClickerView.render(catClickerDetail);
              octopus.setCurrentCatDetail(catClickerDetail);
            };
          })(catClickerDetail)
        );
        this.navbarEl.appendChild(navbarItemEl);
      });
    }
  };

  const catClickerView = {
    init: function() {
      this.catNameEl = document.querySelector("#catName");
      this.countEl = document.querySelector("#count");
      this.catImgContainerEl = document.querySelector(".image-container");
      this.catCreditBadgeEl = document.querySelector("#creditBadge");

      // Initially, we render the first item of "catClickerDetails"
      const initialCatClickerDetail = octopus.getCatClickerDetails()[0];
      this.render(initialCatClickerDetail);
      octopus.setCurrentCatDetail(initialCatClickerDetail);
    },
    // Render a cat's name and count using the given <catClickerDetail>.
    renderCatHeader: function(catClickerDetail) {
      this.catNameEl.textContent = `${catClickerDetail.name}: `;
      this.countEl.textContent = catClickerDetail.count;
    },
    // Render a cat image, and attach a click event listener using the given <catClickerDetail>.
    renderCatImg: function(catClickerDetail) {
      const catImgEl = document.createElement("img");
      catImgEl.setAttribute("src", catClickerDetail.url);
      catImgEl.setAttribute("alt", catClickerDetail.alt);
      catImgEl.addEventListener("click", () => {
        // This is the only place we make a SIDE EFFECT to the given data, <catClickerDetail>.
        // It has a REFERENCE to the item in the <catClickerDetails>.
        catClickerDetail.count++;
        this.countEl.textContent = catClickerDetail.count;
      });

      this.catImgContainerEl.innerHTML = "";
      this.catImgContainerEl.appendChild(catImgEl);
    },
    // Render a credit badge using the given <catClickerDetail>.
    renderCreditBadge: function(catClickerDetail) {
      this.catCreditBadgeEl.innerHTML = catClickerDetail.creditBadge;
    },
    render: function(catClickerDetail) {
      this.renderCatHeader(catClickerDetail);
      this.renderCatImg(catClickerDetail);
      this.renderCreditBadge(catClickerDetail);
    }
  };

  const viewAdminAreaForm = {
    init: function() {
      this.formAdminArea = document.querySelector("#formAdminArea");
      this.inputCatName = document.querySelector("#inputCatName");
      this.inputCatAltText = document.querySelector("#inputCatAltText");
      this.inputCatUrl = document.querySelector("#inputCatUrl");
      this.inputCatCreditBadge = document.querySelector("#inputCatCreditBadge");
      this.inputClickCount = document.querySelector("#inputClickCount");

      this.formAdminArea.addEventListener("submit", function(e) {
        e.preventDefault();
        octopus.editCurrentCatDetail({
          name: this.inputCatName.value,
          alt: this.inputCatAltText.value,
          url: this.inputCatUrl.value,
          creditBadge: this.inputCatCreditBadge.value,
          count: this.inputClickCount.value
        });

        viewAdminArea.hideAdminArea();
        catClickerView.render(octopus.getCurrentCatDetail());
        catNavbarView.init();
      });
    },
    render: function() {
      const currentCatDetail = octopus.getCurrentCatDetail();
      this.inputCatName.value = currentCatDetail.name;
      this.inputCatAltText.value = currentCatDetail.alt;
      this.inputCatUrl.value = currentCatDetail.url;
      this.inputCatCreditBadge.value = currentCatDetail.creditBadge;
      this.inputClickCount.value = currentCatDetail.count;
    }
  };

  const viewAdminArea = {
    init: function() {
      this.openAdminAreaButtonEl = document.querySelector(
        "#openAdminAreaButton"
      );
      this.cancelAdminAreaButtonEl = document.querySelector("#cancelButton");
      this.backdropEl = document.querySelector(".backdrop");
      this.modalEl = document.querySelector(".modal");

      this.openAdminAreaButtonEl.addEventListener("click", () => {
        this.showAdminArea();
      });
      this.backdropEl.addEventListener("click", () => {
        this.hideAdminArea();
      });
      this.cancelAdminAreaButtonEl.addEventListener("click", e => {
        e.preventDefault();
        this.hideAdminArea();
      });
    },
    showAdminArea: function() {
      this.backdropEl.style.display = "block";
      this.modalEl.style.display = "block";
      viewAdminAreaForm.render();
    },
    hideAdminArea: function() {
      this.backdropEl.style.display = "none";
      this.modalEl.style.display = "none";
    }
  };

  window.onload = () => {
    octopus.init();
  };
})();
