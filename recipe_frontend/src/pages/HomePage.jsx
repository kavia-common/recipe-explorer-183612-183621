import React from 'react';
import './home.css';

// PUBLIC_INTERFACE
export default function HomePage() {
  /** HomePage renders the home screen using the Figma assets layout and styles. */
  return (
    <div className="home-screen">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="time">19:27</div>
        <div className="status-icons">
          <div className="signal"></div>
          <div className="wifi"></div>
          <div className="battery"></div>
        </div>
      </div>

      {/* Header Greeting + Avatar */}
      <header className="header">
        <div className="greeting">
          <h1 className="title">Hello Jega</h1>
          <div className="subtitle">What are you cooking today?</div>
        </div>
        <button className="avatar" aria-label="Profile">
          {/* Placeholder circle avatar (exact asset in HTML used an svg placeholder path; here keep container look) */}
          <img src="/assets/figmaimages/figma_image_30_781.png" alt="Profile avatar" />
        </button>
      </header>

      {/* Search and Filter */}
      <div className="search-row">
        <div className="search">
          <span className="search-icon">
            <img src="/assets/figmaimages/figma_image_103_3515.png" alt="" />
          </span>
          <input type="text" placeholder="Search recipe" />
        </div>
        <button className="filter" aria-label="Filter">
          <img src="/assets/figmaimages/figma_image_103_3533.png" alt="Filter" />
        </button>
      </div>

      {/* Category Chips */}
      <div className="chips-scroll" role="tablist" aria-label="Categories">
        <button className="chip chip--active">All</button>
        <button className="chip">Indian</button>
        <button className="chip">Italian</button>
        <button className="chip">Asian</button>
        <button className="chip">Chinese</button>
        <button className="chip">Fruit</button>
        <button className="chip">Vegetables</button>
        <button className="chip">Protein</button>
        <button className="chip">Cereal</button>
        <button className="chip">Local Dishes</button>
      </div>

      {/* Dishes carousel */}
      <section className="dishes" aria-label="Popular dishes">
        <div className="cards-scroll">
          {/* Card 1 */}
          <article className="dish-card">
            <div className="dish-top-img">
              <img className="circle-img" src="/assets/figmaimages/figma_image_18_436.png" alt="Classic Greek Salad circle image" />
            </div>
            <div className="dish-base">
              <div className="bookmark" aria-hidden="true">
                <img className="bookmark-bg" src="/assets/figmaimages/figma_image_100_2922.png" alt="" />
                <img className="bookmark-icon" src="/assets/figmaimages/figma_image_100_2891.png" alt="Save" />
              </div>
              <h3 className="dish-title">Classic Greek Salad</h3>
              <div className="meta">
                <div className="meta-key">Time</div>
                <div className="meta-value">15 Mins</div>
              </div>
              <div className="rating" aria-label="rating 4.5">
                <img className="star" src="/assets/figmaimages/figma_image_100_2539.png" alt="" />
                <span className="rating-text">4.5</span>
              </div>
            </div>
            <img className="dish-main" src="/assets/figmaimages/figma_image_18_424.png" alt="Classic Greek Salad photo" />
          </article>

          {/* Card 2 */}
          <article className="dish-card">
            <div className="dish-top-img">
              <img className="circle-img" src="/assets/figmaimages/figma_image_18_494.png" alt="Crunchy Nut Coleslaw circle" />
            </div>
            <div className="dish-base">
              <div className="bookmark" aria-hidden="true">
                <img className="bookmark-bg" src="/assets/figmaimages/figma_image_100_2922.png" alt="" />
                <img className="bookmark-icon" src="/assets/figmaimages/figma_image_100_2891.png" alt="Save" />
              </div>
              <h3 className="dish-title">Crunchy Nut Coleslaw</h3>
              <div className="meta">
                <div className="meta-key">Time</div>
                <div className="meta-value">10 Mins</div>
              </div>
              <div className="rating" aria-label="rating 3.5">
                <span className="star-inline"></span>
                <span className="rating-text">3.5</span>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="dish-card">
            <div className="dish-top-img">
              <img className="circle-img" src="/assets/figmaimages/figma_image_20_574.png" alt="Shrimp Chicken Andouille Sausage Jambalaya circle" />
            </div>
            <div className="dish-base">
              <div className="bookmark" aria-hidden="true">
                <img className="bookmark-bg" src="/assets/figmaimages/figma_image_100_2922.png" alt="" />
                <img className="bookmark-icon" src="/assets/figmaimages/figma_image_100_2891.png" alt="Save" />
              </div>
              <h3 className="dish-title">Shrimp Chicken Andouille Sausage Jambalaya</h3>
              <div className="meta">
                <div className="meta-key">Time</div>
                <div className="meta-value">10 Mins</div>
              </div>
              <div className="rating" aria-label="rating 3.0">
                <span className="star-inline"></span>
                <span className="rating-text">3.0</span>
              </div>
            </div>
          </article>

          {/* Card 4 */}
          <article className="dish-card">
            <div className="dish-top-img">
              <img className="circle-img" src="/assets/figmaimages/figma_image_22_221.png" alt="Barbecue Chicken Jollof Rice circle" />
            </div>
            <div className="dish-base">
              <div className="bookmark" aria-hidden="true">
                <img className="bookmark-bg" src="/assets/figmaimages/figma_image_100_2922.png" alt="" />
                <img className="bookmark-icon" src="/assets/figmaimages/figma_image_100_2891.png" alt="Save" />
              </div>
              <h3 className="dish-title">Barbecue Chicken Jollof Rice</h3>
              <div className="meta">
                <div className="meta-key">Time</div>
                <div className="meta-value">10 Mins</div>
              </div>
              <div className="rating" aria-label="rating 4.5">
                <span className="star-inline"></span>
                <span className="rating-text">4.5</span>
              </div>
            </div>
          </article>

          {/* Card 5 */}
          <article className="dish-card">
            <div className="dish-top-img">
              <img className="circle-img" src="/assets/figmaimages/figma_image_22_256.png" alt="Portuguese Piri Piri Chicken circle" />
            </div>
            <div className="dish-base">
              <div className="bookmark" aria-hidden="true">
                <img className="bookmark-bg" src="/assets/figmaimages/figma_image_100_2922.png" alt="" />
                <img className="bookmark-icon" src="/assets/figmaimages/figma_image_100_2891.png" alt="Save" />
              </div>
              <h3 className="dish-title">Portuguese Piri Piri Chicken</h3>
              <div className="meta">
                <div className="meta-key">Time</div>
                <div className="meta-value">10 Mins</div>
              </div>
              <div className="rating" aria-label="rating 4.5">
                <span className="star-inline"></span>
                <span className="rating-text">4.5</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* New Recipes */}
      <h2 className="section-title">New Recipes</h2>
      <section className="new-recipes" aria-label="New recipes">
        <div className="cards-scroll">
          <article className="new-card">
            <div className="new-base">
              <h3 className="new-title">Steak with tomato sauce and bulgur rice.</h3>
              <div className="new-rating">
                <span className="star s"></span><span className="star s"></span><span className="star s"></span><span className="star s"></span><span className="star s"></span>
              </div>
              <div className="creator">
                <img className="creator-avatar" src="/assets/figmaimages/figma_image_30_848.png" alt="By James Milner" />
                <span className="creator-name">By James Milner</span>
              </div>
              <div className="time">
                <img className="timer" src="/assets/figmaimages/figma_image_103_3270.png" alt="" />
                <span>20 mins</span>
              </div>
            </div>
            <div className="new-circle">
              <img src="/assets/figmaimages/figma_image_30_841.png" alt="Steak image" />
            </div>
          </article>

          <article className="new-card">
            <div className="new-base">
              <h3 className="new-title">Pilaf sweet with lamb-and-raisins</h3>
              <div className="new-rating">
                <span className="star s"></span><span className="star s"></span><span className="star s"></span><span className="star s"></span><span className="star s"></span>
              </div>
              <div className="creator">
                <span className="creator-avatar placeholder"></span>
                <span className="creator-name">By Laura wilson</span>
              </div>
              <div className="time">
                <span className="timer placeholder"></span>
                <span>20 mins</span>
              </div>
            </div>
            <div className="new-circle">
              <img src="/assets/figmaimages/figma_image_30_811.png" alt="Pilaf image" />
            </div>
          </article>

          <article className="new-card">
            <div className="new-base">
              <h3 className="new-title">Rice Pilaf, Broccoli and Chicken</h3>
              <div className="new-rating">
                <span className="star s"></span><span className="star s"></span><span className="star s"></span><span className="star s"></span><span className="star s"></span>
              </div>
              <div className="creator">
                <span className="creator-avatar placeholder"></span>
                <span className="creator-name">By Lucas Moura</span>
              </div>
              <div className="time">
                <span className="timer placeholder"></span>
                <span>20 mins</span>
              </div>
            </div>
            <div className="new-circle">
              <img src="/assets/figmaimages/figma_image_22_276.png" alt="Rice Pilaf image" />
            </div>
          </article>

          <article className="new-card">
            <div className="new-base">
              <h3 className="new-title">Stir-fry chicken with broccoli in sweet and sour sauce and rice.</h3>
              <div className="new-rating">
                <span className="star s"></span><span className="star s"></span><span className="star s"></span><span className="star s"></span><span className="star s"></span>
              </div>
              <div className="creator">
                <span className="creator-avatar placeholder"></span>
                <span className="creator-name">By Miquel Ferran</span>
              </div>
              <div className="time">
                <span className="timer placeholder"></span>
                <span>20 mins</span>
              </div>
            </div>
            <div className="new-circle">
              <img src="/assets/figmaimages/figma_image_30_750.png" alt="Stir-fry chicken image" />
            </div>
          </article>
        </div>
      </section>

      {/* Bottom Nav */}
      <nav className="nav-bar" aria-label="Bottom Navigation">
        <div className="nav-bg"></div>
        <button className="nav-item active" aria-label="Home">
          <img src="/assets/figmaimages/figma_image_103_4015.png" alt="Home" />
        </button>
        <button className="nav-item" aria-label="Bookmarks">
          <img src="/assets/figmaimages/figma_image_103_4061.png" alt="Bookmarks" />
        </button>
        <button className="nav-menu" aria-label="Add">
          <img className="nav-menu-bg" src="/assets/figmaimages/figma_image_103_4043.png" alt="" />
          <img className="nav-plus" src="/assets/figmaimages/figma_image_103_4323.png" alt="Add" />
        </button>
        <button className="nav-item" aria-label="Notifications">
          <img src="/assets/figmaimages/figma_image_103_3787.png" alt="Notifications" />
        </button>
        <button className="nav-item" aria-label="Profile">
          <img src="/assets/figmaimages/figma_image_103_3805.png" alt="Profile" />
        </button>
      </nav>

      {/* Home Indicator */}
      <div className="home-indicator"></div>
    </div>
  );
}
