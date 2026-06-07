---
layout: default
title: Support
description: Support and FAQ for the tanksalot iOS app.
permalink: /support/
---

<div class="page" markdown="1">
<div class="container" markdown="1">

# Support

Have a question or hit a bug? Email **<a href="mailto:{{ site.contact_email }}">{{ site.contact_email }}</a>**. Expect a reply within a few days, since it's built and supported by one person.

## Frequently asked questions

### How is remaining capacity estimated?

It's an estimate, not a measurement. tanksalot takes the tank's full capacity at the last Fill and subtracts elapsed session time × liters-per-minute. There are no sensors and nothing reads the physical tank, so the estimate is only as accurate as the numbers you enter: the tank size, when you marked it Full, and the start time, end time, and flow rate of each session. Keep those accurate and the estimate stays close; skip a session or fat-finger a flow rate and it will drift.

### Can I rely on the estimate to know when a tank will run out?

No. Treat every number in the app as a planning estimate, not a guarantee. You are responsible for confirming your actual supply, keeping spare tanks on hand, and leaving a safety margin. Real-world factors the app can't see (a slow leak, a regulator left open, a flow rate changed at the device) all affect how long a tank truly lasts. When in doubt, check the tank and follow your clinician's or supplier's guidance.

### What happens if I forget to end a session?

The session keeps running. End it manually whenever you notice; the tank's used-liters count catches up. If the session sits past its predicted-empty moment, the Live Activity flips to a red "Replace tank" state until you end it.

### Does this work without internet?

Yes. tanksalot is fully offline. No accounts, no servers, no APIs. Tank inventory and session history live on your device.

### Can I use this for adult oxygen therapy?

The app is general-purpose and works for any portable oxygen setup. **tanksalot is not a medical device, is not FDA-cleared, and is not a substitute for clinician guidance.** Always follow your prescriber's directions.

### What devices does it run on?

iPhone running a recent version of iOS. Live Activities and widgets follow Apple's normal device support.

### How do I report a bug?

Email **<a href="mailto:{{ site.contact_email }}">{{ site.contact_email }}</a>** with a description of what happened, the iOS version, and a screenshot if you have one.

---

<p class="meta">
tanksalot is not FDA-cleared and does not provide medical advice. If something feels
wrong with your or your loved one's oxygen setup, contact your clinician or supplier
directly.
</p>

</div>
</div>
