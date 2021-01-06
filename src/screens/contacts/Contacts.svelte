<script lang="ts">
  import cn from 'classnames';

  import Title, { TitleType } from '../../components/title';
  import LabeledInput from '../../components/labeled-input';
  import { InputType } from '../../components/input';
  import Button from '../../components/button';

  const buttonRowClassList = cn('contacts__row', 'contacts__row--align-right');
</script>

<div class="contacts">
  <Title type={TitleType.Primary}>Write us</Title>
  <form class="contacts__form">
    <div class="contacts__row">
      <LabeledInput placeholder="John Doe">Your name</LabeledInput>
    </div>
    <div class="contacts__row">
      <LabeledInput placeholder="example@email.com">Your e-mail</LabeledInput>
    </div>
    <div class="contacts__row">
      <LabeledInput placeholder="Message" type={InputType.Textarea}>Your message</LabeledInput>
    </div>
    <div class={buttonRowClassList}>
      <Button>Submit</Button>
    </div>
  </form>
</div>

<style>
  .contacts__row {
    margin-top: 40px;
  }

  .contacts__row--align-right {
    text-align: right;
  }
</style>
