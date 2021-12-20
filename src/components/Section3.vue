<template>
  <div>
    <div class="Section4">
      <div class="container3">
        <div class="textbox3">
          <div class="inner-text3">
            <p1>Frenchie Education Center</p1>
            <p>
              The only thing we care about almost as much as our furbabies is
              educating our potential families of “all things frenchie” please
              read a few articles from our blog, which we update regularly to
              make sure you’re informed before the big decision.
            </p>
            <div class="brdbtn">
              <p2>Our Blog</p2>
            </div>
          </div>
        </div>
        <div class="image">
          <img
            src="https://ethicalfrenchie.com/uploads/educationcenter.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="Section5">
      <h1>Anyone can "Add a Frenchie to Cart"...</h1>
      <div class="description">
        <p>
          You’ll learn more about Blue French Bulldogs and the various french
          bulldog puppies for sale from us than anywhere else, as we pride
          ourselves on Education. In fact before making your decision to bring
          home a french bulldog puppy, we ensure that you are well prepared.
        </p>
        <div class="brdbtn1">
          <p3>View our Puppies</p3>
        </div>
      </div>
    </div>
    <div class="title">
      <h1>Quick #FACTS</h1>
    </div>
    <div class="accordian">
      <vsa-list>
        <!-- Here you can use v-for to loop through items  -->
        <vsa-item>
          <vsa-heading> How much do French Bulldogs cost? </vsa-heading>
          <vsa-content> This is the content </vsa-content>
        </vsa-item>
        <vsa-item>
          <vsa-heading> What is the process? </vsa-heading>
          <vsa-content> This is the content </vsa-content>
        </vsa-item>
        <vsa-item>
          <vsa-heading> Who are the breeders? </vsa-heading>
          <vsa-content> This is the content </vsa-content>
        </vsa-item>
      </vsa-list>
    </div>
  </div>
</template>

<style scoped>
.Section4 .description {
  margin-left: 4%;
  margin-right: 4%;
  background: #fff;
  color: #5c5e65;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
  padding: 40px;
}
.Section4 {
  /* display: flex;
  justify-content: center; */
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 50px;
}
.Section4 .container3 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #901941;
}
.Section4 .textbox3 {
  width: 50%;
  background: #901941;
  color: #fff;
  /* box-shadow: 0 5px 15px rgb(0 0 0 / 8%); */
  text-align: center;
}
.Section4 .inner-text3 {
  padding: 70px;
}
.Section4 .image {
  width: 50%;
  box-sizing: border-box;
}
.Section4 .image img {
  max-width: 100%;
  height: auto;
  box-sizing: border-box;
}
.inner-text3 p {
  font-size: 15.5px;
  color: #dcdcdc;
  text-align: left;
  font-family: Montserrat-Regular;
  letter-spacing: 2px;
}
.inner-text3 p1 {
  font-size: 28px;
  font-family: Montserrat-Regular;
}
.brdbtn p2 {
  font-size: 15px;
  font-family: Montserrat-Regular;
}
h1 {
  font-size: 40px;
  font-family: sans-serif;
  font-weight: 350;
  text-align: center;
}
.Section5 .description {
  margin-left: 4%;
  margin-right: 4%;
  background: #fff;
  color: #5c5e65;
  box-shadow: 0 5px 15px rgb(0 0 0 / 8%);
  padding: 40px;
  font-size: 15px;
  font-family: Montserrat-Regular;
}
.brdbtn1 p3 {
  font-size: 12px;
  font-family: Montserrat-Regular;
}
.brdbtn1 {
  border: 1px solid black;
  padding: 9px;
  padding-left: 20px;
  padding-right: 20px;
  width: 88px;
}
.accordian {
  display: flex;
  justify-content: center;
  padding: 30px;
}
.vsa-list {
  --vsa-highlight-color: #5de1e6;
}
</style>