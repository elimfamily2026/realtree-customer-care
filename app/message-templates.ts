export type MessageTemplate = {id:string;code:string;marketplace?:"Amazon"|"Walmart";category:string;title:string;whenToUse:string;body:string};

export const messageTemplates: MessageTemplate[] = [
  {
    "id": "amazon-1-1",
    "code": "1.1",
    "category": "Order cancellations",
    "title": "Cancellation Request — Order Already Processed",
    "whenToUse": "A customer asks to cancel or change an order that has already been processed in our system (whether or not it has physically shipped yet).",
    "body": "Thank you for reaching out! Unfortunately, the order has been processed all the way in our system and we're unable to make any changes. I apologize for the inconvenience."
  },
  {
    "id": "amazon-1-2",
    "code": "1.2",
    "category": "Order cancellations",
    "title": "Cancellation Request — Order Already Shipped (Detailed Version)",
    "whenToUse": "You want to reference the specific item and shipping time to make the explanation clearer to the customer.",
    "body": "Thank you for reaching out! Unfortunately, your order for the <Product Name> has already been processed <and shipped as of 8:00 AM today>. Because the item is already in transit, we are unable to cancel it at this time. We apologize for any inconvenience!"
  },
  {
    "id": "amazon-1-3",
    "code": "1.3",
    "category": "Order cancellations",
    "title": "Cancellation Confirmed — Refund Details",
    "whenToUse": "A cancellation has been completed and you need to confirm the cancellation and refund with the customer.",
    "body": "We're writing to confirm that your recent order has been canceled as per your request. Here are the details:\n\nOrder Information:\n\nYou initiated the cancellation of this order, and we have processed it accordingly.\n\nRefund Process:\nA full refund, including taxes and shipping charges, will be issued to your original payment method.\nPlease allow some time for the refund to appear in your account, depending on your bank's processing times.\n\nNext Steps:\nWe appreciate your business and your feedback. We hope your future shopping experiences with us will meet your expectations. If there are any improvements you'd like to suggest, please feel free to share your thoughts.\n\nThank you for choosing us as your online retailer.\nSincerely,\nRealtree"
  },
  {
    "id": "amazon-1-4",
    "code": "1.4",
    "category": "Order cancellations",
    "title": "Order Canceled — Item Out of Stock",
    "whenToUse": "An order must be canceled because the item is out of stock on our end.",
    "body": "We apologize for the inconvenience; we have canceled your order due to the item being out of stock."
  },
  {
    "id": "amazon-1-5",
    "code": "1.5",
    "category": "Order cancellations",
    "title": "Out of Stock — Item Available via Amazon FBA",
    "whenToUse": "The item is out of stock in our own inventory but is currently available through our Amazon FBA listing.",
    "body": "Thank you for your recent purchase. Unfortunately, the item you ordered is currently out of stock on our end, and we won't be able to fulfill the order as expected. We sincerely apologize for the inconvenience.\n\nTo ensure you receive the item as quickly as possible, we kindly ask that you cancel this order and repurchase it directly from the Amazon FBA listing, where the item is available for immediate shipping.\n\nPlease let us know if you need any help with the cancellation process, we're here to assist."
  },
  {
    "id": "amazon-2-1",
    "code": "2.1",
    "category": "Shipping, delivery & lost packages",
    "title": "Lost Package Confirmed by Carrier — Not Claims Protected",
    "whenToUse": "UPS (or another carrier) has confirmed the package was lost in transit, and the shipment is not Amazon Claims Protected, so we issue the refund directly.",
    "body": "We're so sorry for the frustration this situation has caused. After following up with UPS, we've confirmed that your package was lost in transit. We completely understand how disappointing this must be, and we want to make it right.\n\nYour refund has been initiated and should be processed within 3-5 business days. If you have any other questions or concerns, please don't hesitate to reach out. We're here to help.\n\nThank you for your patience and understanding."
  },
  {
    "id": "amazon-2-2",
    "code": "2.2",
    "category": "Shipping, delivery & lost packages",
    "title": "Lost in Transit — Confirmed with Amazon, Not Claims Protected",
    "whenToUse": "Amazon has confirmed the package was lost in transit and we've already processed the refund.",
    "body": "Thank you for letting us know you have not received your order. We've confirmed with Amazon that the package was lost in transit, and your refund has been processed. You should see the credit applied to your original payment method within 3–5 business days. We sincerely apologize for the inconvenience and appreciate your patience. If you still like the item, please place a new order at your convenience. If you need further assistance, feel free to reach out."
  },
  {
    "id": "amazon-2-3",
    "code": "2.3",
    "category": "Shipping, delivery & lost packages",
    "title": "Lost Package — Not Insured / Not Claims Protected (Investigating)",
    "whenToUse": "A package appears lost, is not insured or claims-protected, and we are still investigating with the carrier before issuing a resolution.",
    "body": "Thank you for reaching out. We've submitted a request to USPS to see if they can provide the geolocation of where the package was scanned.\n\nIn the meantime, we recommend checking with your neighbors in case the package was delivered nearby. You may also consider leaving a note in your mailbox for the carrier, as they may be able to assist in locating it.\n\nWe appreciate your patience and will keep you updated as soon as we receive more information."
  },
  {
    "id": "amazon-2-4",
    "code": "2.4",
    "category": "Shipping, delivery & lost packages",
    "title": "Delayed Package — Amazon Partnered Shipping Service",
    "whenToUse": "Tracking shows the package as delayed and it shipped through an Amazon partnered carrier service, so Amazon can act faster than we can.",
    "body": "We're sorry to hear that you haven't received your package. According to the carrier, the shipment is currently marked as delayed. Since the shipping was handled through Amazon's partnered service, Amazon Customer Service will be able to assist you with the fastest resolution. Please contact Amazon through your order page, and they will take care of this for you."
  },
  {
    "id": "amazon-2-5",
    "code": "2.5",
    "category": "Shipping, delivery & lost packages",
    "title": "Tracking Not Updated — Not Claims Protected",
    "whenToUse": "Tracking has stalled or not updated and the order isn't claims-protected. Review tracking and, if applicable, open a claim with USPS before responding.",
    "body": "Thank you for reaching out and letting us know! We are checking with USPS to see if they can provide more information on the whereabouts of your tracking. We apologize for the inconvenience and appreciate your patience as we work through this issue."
  },
  {
    "id": "amazon-2-6",
    "code": "2.6",
    "category": "Shipping, delivery & lost packages",
    "title": "Package Undeliverable — Direct to A-to-Z Claim",
    "whenToUse": "A package comes back marked undeliverable. Confirm claims-protection status before refunding directly — if claims protected, direct the customer to file an A-to-Z Guarantee claim rather than issuing a refund yourself.",
    "body": "We're writing to let you know that your package associated with order XXX-XXXXXXX-XXXXXXX was undeliverable. To receive your refund, please file an A-to-Z Guarantee claim with Amazon. Once the claim is submitted, Amazon will review the order and process the refund accordingly."
  },
  {
    "id": "amazon-2-7",
    "code": "2.7",
    "category": "Shipping, delivery & lost packages",
    "title": "Package Still in Transit — Claims Protected",
    "whenToUse": "The shipment is Claims Protected, past its scheduled delivery date, and still shows as in transit.",
    "body": "We are so sorry to hear that you haven't received your order yet.\nAccording to the tracking details for order #xxx-xxxxxxx-xxxxxxx (Tracking: xxxxxxx), the package is delayed but still currently in transit.\nSince this shipment was handled through Amazon's shipping network and is past its scheduled delivery date, please reach out directly to Amazon Customer Service via live chat or phone. They can track down the transit delay on their end or issue a refund directly through their delivery guarantee.\nWe sincerely apologize for the delay and appreciate your patience!"
  },
  {
    "id": "amazon-2-8",
    "code": "2.8",
    "category": "Shipping, delivery & lost packages",
    "title": "Package Too Late to Investigate (45+ Days)",
    "whenToUse": "More than 45 days have passed since the scheduled delivery date, so the carrier no longer allows an investigation, replacement, or claim.",
    "body": "Unfortunately, we're unable to assist with packages that were scheduled to be delivered more than 45 days ago. After this time frame, the carrier no longer allows us to investigate, replace, or file a claim on the shipment.\nWe truly regret any inconvenience this may cause and appreciate your understanding."
  },
  {
    "id": "amazon-2-9",
    "code": "2.9",
    "category": "Shipping, delivery & lost packages",
    "title": "Late Lost-Package Refund — One-Time Courtesy Exception",
    "whenToUse": "A lost-package report falls outside Amazon's standard 30-day reporting window, but you're approving the refund as a one-time exception.",
    "body": "Thank you for reaching out to us regarding your order. Amazon requires that claims for lost or non-received packages be reported within 30 days of delivery.\n\nWhile this request falls outside that timeframe, we were able to approve your refund as a one-time exception as a courtesy. Please note that carrier tracking links expire after a certain period, which can make it difficult to research lost packages once that window has passed. You should see your refund apply to your original payment method in the next 3-5 days."
  },
  {
    "id": "amazon-3-1",
    "code": "3.1",
    "category": "Returns — policy & process",
    "title": "Free Returns vs. Third-Party Seller Return Policy",
    "whenToUse": "A customer is confused about why our return policy differs from Amazon's standard Prime return guidelines.",
    "body": "Dear [Customer's Name],\nThank you for reaching out! We want to clarify that we are a third-party seller on Amazon, which means we manage our own return policies, separate from Amazon's Prime guidelines.\nWe understand that returns are an important part of your shopping experience, and we are happy to assist you according to our store's return policy, which can differ from Amazon's standard Prime rules.\nIf you have any questions about how our returns process works, or if you need further assistance with your return, please feel free to let us know. We're here to help and want to ensure you have the best experience with our store.\nThank you for your understanding, and we look forward to serving you again!"
  },
  {
    "id": "amazon-3-2",
    "code": "3.2",
    "category": "Returns — policy & process",
    "title": "Return Window Has Expired",
    "whenToUse": "A customer wants to return an item, but more than 30 days have passed since delivery.",
    "body": "Thank you for reaching out regarding your recent order. We understand you'd like to return your item; however, the standard return window for this product has now passed. Our return policy allows returns within 30 days of delivery, and unfortunately, that timeframe has expired. We apologize for the inconvenience.\n\nThank you for your understanding,\nWarm regards,\nRealtree"
  },
  {
    "id": "amazon-3-3",
    "code": "3.3",
    "category": "Returns — policy & process",
    "title": "Late Return Accepted (Fee Applies)",
    "whenToUse": "The return window has technically closed, but you are accepting the return as an exception with a fee.",
    "body": "Thank you for reaching out. We see you initiated the return on <date>, and we will accept a late return. Please note a charge will incur since this order is outside Amazon's return window. We recommend reviewing Amazon's return policy for future purchases.\nBest Regards,\nRealtree"
  },
  {
    "id": "amazon-3-4",
    "code": "3.4",
    "category": "Returns — policy & process",
    "title": "Return Label Help — Redirect to Amazon",
    "whenToUse": "A customer needs a return label or return instructions. As a third-party seller, we cannot generate labels directly — this must go through Amazon's system.",
    "body": "Amazon has provided an update. They recommend you to contact Amazon Customer Support directly.\n\nTo do this, please sign in to your Amazon account and contact Amazon Customer Support for assistance with their return instructions. They will be able to help you with the correct return labels and instructions.\n\nPlease be informed that as a seller, we are not able to generate or send return labels directly to buyers, as this needs to be handled through Amazon's return system for proper tracking and processing."
  },
  {
    "id": "amazon-3-5",
    "code": "3.5",
    "category": "Returns — policy & process",
    "title": "Return Drop-Off Location Help (UPS)",
    "whenToUse": "A customer needs help finding a UPS drop-off location for their return.",
    "body": "Thank you for reaching out. All of our returns are processed through UPS. To find the nearest drop-off location, please visit the UPS website and use their Location Finder, which will show the closest UPS Store, Access Point, or authorized drop-off based on your address or ZIP code.\nIf you have any questions or need help with your UPS return label, feel free to let us know—we're happy to help."
  },
  {
    "id": "amazon-3-6",
    "code": "3.6",
    "category": "Returns — policy & process",
    "title": "Consolidating Multiple Returns to Reduce Shipping Costs",
    "whenToUse": "A customer has initiated two or more separate returns from the same order. Encourage them to consolidate into a single shipment to lower their return shipping cost.",
    "body": "Option A — Items not yet shipped back:\n\"Thank you for shopping with us! We noticed that you recently initiated returns for two separate items from the same order (Order #xxx-xxxxxxx-xxxxxxx).\nIf you haven't shipped them back yet, please feel free to combine both items into a single return shipment box. Shipping them together in one package can help consolidate the shipment and lower your total return shipping costs.\nPlease let us know if you have any questions or need further assistance!\"\n\nOption B — Encourage consolidating under one RMA:\n\"Thank you for shopping with us! We noticed that you recently initiated two separate returns for items from the same order (Order #xxx-xxxxxxx-xxxxxxx).\nTo help reduce return shipping costs, if you have not shipped the items back yet, please cancel the current return requests and initiate one new return request that includes both items. This will allow you to consolidate both returns into a single shipment and avoid paying for multiple return shipments.\nThank you for your cooperation.\""
  },
  {
    "id": "amazon-4-1",
    "code": "4.1",
    "category": "Restocking & return shipping fees",
    "title": "Restocking Fee — Standard Explanation",
    "whenToUse": "A customer asks why a restocking fee was applied to a return that was in good condition (buyer's remorse, sizing, changed mind, etc.).",
    "body": "Thank you for reaching out about the restocking fee. I completely understand your concern, and I'm sorry for any frustration this may have caused.\n\nTo clarify, our 30-day return policy applies a 20% restocking fee for items returned in good condition when there was no error or defect—typically when the return is due to buyer's remorse (e.g., not liking the item, size issues, no longer needed or a change of mind). This fee helps cover the cost of processing, inspecting, and restocking returned items, allowing us to keep prices competitive for all customers.\n\nWe strive to be transparent about this policy—it's stated both during the return initiation process and in our return policy. That said, I understand it can still be disappointing, and I sincerely appreciate your understanding.\n\nIf you still have questions or concerns, please don't hesitate to reach out. We're here to help!"
  },
  {
    "id": "amazon-4-2",
    "code": "4.2",
    "category": "Restocking & return shipping fees",
    "title": "Restocking Fee — Waived as Goodwill (Amazon Drop-Off)",
    "whenToUse": "An unhappy customer pushes back on the restocking fee; offer to waive it as a courtesy if returned to an Amazon drop-off location in original condition.",
    "body": "However, if you return the item in its original condition to an Amazon drop-off location, we may waive the fee as a courtesy."
  },
  {
    "id": "amazon-4-3",
    "code": "4.3",
    "category": "Restocking & return shipping fees",
    "title": "Restocking Fee — Item Returned Washed (50% Fee, Frustrated Customer)",
    "whenToUse": "A customer disputes a reduced refund after ordering a replacement size, but the returned item was washed and is no longer sellable as new.",
    "body": "I understand your frustration regarding the refund amount. We truly appreciate that you ordered a replacement size to make sure you got the right fit.\n\nHowever, as mentioned in our previous message and per our Amazon return policy (https://www.amazon.com/gp/help/customer/display.html?nodeId=GKM69DUUYKQWKWX7),\n\nReturns must be received in their original, unwashed, and sellable condition. Upon inspection of your return, our team determined that the item had been washed, which renders it unsellable as new.\nBecause the item cannot be restocked, a 50% restocking/disposal fee was applied to the refund. Regarding your request to have the item sent back, please note that once an item is processed for a partial refund and disposal, we are unable to return the original garment to the buyer.\n\nWe aim to be as transparent as possible with our return guidelines to avoid these situations. We appreciate your understanding."
  },
  {
    "id": "amazon-4-4",
    "code": "4.4",
    "category": "Restocking & return shipping fees",
    "title": "Return Shipping (Label) Fee Clarification",
    "whenToUse": "A customer disputes a deduction and needs clarification that it was a return shipping label fee, not a restocking fee.",
    "body": "Thank you for your message regarding the return of your Realtree Camo Hunting Shirt. I would like to clarify the charges on your refund for <order>.\nAccording to Amazon's return policy, while many returns are free, certain situations may incur fees. We did not charge a restocking fee for your return. The deduction of <$6.95> was specifically for the return shipping cost.\nPer Amazon policy, return shipping fees may be charged if a non-free shipping/drop-off option is selected or if the item is classified as heavy or bulky. We apologize for any confusion and hope this clarifies how your refund was processed."
  },
  {
    "id": "amazon-4-5",
    "code": "4.5",
    "category": "Restocking & return shipping fees",
    "title": "Return Shipping Fee — Waived & Refunded (Goodwill)",
    "whenToUse": "A customer is upset about a return shipping label fee and you're issuing a full refund of that fee as a resolution.",
    "body": "We sincerely apologize for the frustration and any confusion regarding your return.\n\nPlease note that the $ charge is not a restocking fee; it is the carrier return shipping label fee that applies when an item is returned outside of Amazon's designated free drop-off locations. For more details on how return shipping fees work, you can review Amazon's Free Returns Policy by clicking \"FREE Returns\" on the product page.\n\nTo make things right, we have issued a full refund for the $7.15 return shipping fee directly to your original payment method—no replacement order required. Please allow 3–5 business days for the credit to appear on your account.\n\nWe appreciate your feedback and thank you for your patience while we resolved this for you.\n\nBest regards,\nRealtree Customer Support"
  },
  {
    "id": "amazon-4-6",
    "code": "4.6",
    "category": "Restocking & return shipping fees",
    "title": "Return Shipping Fee — Education on Amazon's \"Free Returns\" Badge",
    "whenToUse": "A customer cites Amazon's on-listing \"Free Returns\" messaging to dispute a shipping deduction.",
    "body": "Amazon automatically displays \"Free Returns\" across product listings, this is added directly by Amazon's platform and is not something we set or advertise ourselves. If you click on that \"Free Returns\" link, it directs to Amazon's full return policy, which specifies that free return shipping is only available for certain eligible drop-off methods and notes that third-party sellers may deduct return shipping or applicable costs depending on the return reason. We appreciate your understanding!"
  },
  {
    "id": "amazon-4-7",
    "code": "4.7",
    "category": "Restocking & return shipping fees",
    "title": "Free Return Shipping — When Fees May Apply",
    "whenToUse": "General reference for explaining when a return shipping fee can apply, useful for customers threatening a negative review over the charge.",
    "body": "Most items include at least one free return shipping option. However, you may be charged if:\n- You select a shipping/drop-off option that is not free.\n- You return a heavy and/or bulky item.\n- You have an unusually high return rate.\n\nMore info: https://www.amazon.com/gp/help/customer/display.html/ref=mk_fr_ret_dp_1?ie=UTF8&nodeId=GKM69DUUYKQWKWX7"
  },
  {
    "id": "amazon-4-8",
    "code": "4.8",
    "category": "Restocking & return shipping fees",
    "title": "Waive Return Shipping Fee for a Size Exchange",
    "whenToUse": "We don't offer direct exchanges, but a customer wants a different size and you're willing to waive the return shipping fee if they place a new order.",
    "body": "Thanks for getting back to us. We do not offer direct exchanges. To get the [size] size, please place a new order for that item. Once you have placed the order, please send us the new order number. If you return the original item in its original condition with the tags still attached, we will waive the return shipping costs for you.\nRealtree"
  },
  {
    "id": "amazon-4-9",
    "code": "4.9",
    "category": "Restocking & return shipping fees",
    "title": "Waive Shipping Fee for Sizing Return — Link the New Order",
    "whenToUse": "A customer returning for a sizing issue has already placed (or is about to place) a new order for the correct size; waive the shipping cost once the new order is linked.",
    "body": "Thank you for your return! We completely understand that finding the right size is important.\n\nPlease kindly note that, for returns due to a sizing issue, the return shipping cost would normally be the buyer's responsibility. However, we'd be happy to help make this process easier for you. If you have placed a new order for the size you prefer, please send us the new order ID.\n\nOnce we receive it, we can link the new order to your current return and waive the shipping cost for you.\n\nWe truly appreciate your understanding and look forward to assisting you!"
  },
  {
    "id": "amazon-5-1",
    "code": "5.1",
    "category": "Item condition upon return",
    "title": "Item Returned Used/Washed — Refund Denied",
    "whenToUse": "Inspection shows the item was used or washed and is not in resellable, original condition, so no refund is issued.",
    "body": "We have received and inspected your returned item. Unfortunately, the item was returned in a used condition (washed), which means it is not in original, resellable condition.\nAccording to Amazon's return policy, items must be returned in the same condition as received to be eligible for a refund. For this reason, we are unable to issue a refund for this return.\nBest Regards,\nRealtree"
  },
  {
    "id": "amazon-5-2",
    "code": "5.2",
    "category": "Item condition upon return",
    "title": "Unsellable Item — Partial Refund Applied",
    "whenToUse": "Inspection shows signs of use or missing packaging/accessories; a partial refund with a restocking deduction is issued rather than a full denial.",
    "body": "We have received your returned item and inspected it upon arrival.\n\nUnfortunately, the item was returned in a condition different from how it was originally sent (for example: signs of use, missing packaging/accessories). Because of this, a partial refund was issued with a [60%] restocking deduction, in accordance with Amazon's return policy.\n\nRegarding your request to have the item sent back to you: once a return is completed through Amazon, sellers are not permitted to ship returned items back to customers. For this reason, we're unable to send the item back.\n\nThe refund has been processed through Amazon, and you should see it reflected on your original payment method according to Amazon's standard refund timeline."
  },
  {
    "id": "amazon-5-3",
    "code": "5.3",
    "category": "Item condition upon return",
    "title": "Odor / Unsellable Condition — Disposal Fee",
    "whenToUse": "The returned product has a noticeable odor or otherwise fails inspection for resale, requiring a disposal fee.",
    "body": "Upon review, the product was found to have a noticeable odor, which indicates that it is not in a resellable condition and does not meet our return policy guidelines. As a result, a disposal fee will be required.\n\nWe understand this may not be the outcome you were hoping for and sincerely appreciate your understanding."
  },
  {
    "id": "amazon-5-4",
    "code": "5.4",
    "category": "Item condition upon return",
    "title": "Dirty / Debris Condition — Disposal Fee Required",
    "whenToUse": "Item was returned dirty or with debris, making it unsellable; a disposal fee applies.",
    "body": "We have received and inspected your returned item. Unfortunately, the item was returned in a used condition (dirty with debris), which means it is not in original, resellable condition.\nAccording to Amazon's return policy, items must be returned in the same condition as received to be eligible for a refund. For this reason, a disposal fee will be required."
  },
  {
    "id": "amazon-5-5",
    "code": "5.5",
    "category": "Item condition upon return",
    "title": "Amazon Review Response — Washed/Used Item Dispute",
    "whenToUse": "Responding publicly to an Amazon customer review that disputes a partial refund due to item condition.",
    "body": "We take pride in our products. Per Amazon policy, returns must be in new condition. A partial refund was issued as the item was returned in a washed/used state, rendering it unsellable."
  },
  {
    "id": "amazon-5-6",
    "code": "5.6",
    "category": "Item condition upon return",
    "title": "Altered / Modified Item — Full Refund Not Issued",
    "whenToUse": "The returned item was physically altered (e.g., cut, modified) by the customer rather than defective from manufacturing, so a full refund cannot be issued. Attach inspection photos to the thread.",
    "body": "Upon inspecting the returned [Product Name], our warehouse team noted that the item was returned altered (for example: cut or modified), rendering it unsellable rather than defective from manufacturing. Per Amazon's return guidelines and our store policy, items must be returned in their original condition. Because the item was modified and received in an unsellable state, a full refund could not be issued. Photos documenting the condition in which the item was received have been attached to this thread for your reference."
  },
  {
    "id": "amazon-6-1",
    "code": "6.1",
    "category": "Defective or damaged products",
    "title": "Defective Product — Request Photos → Direct to Replacement",
    "whenToUse": "A customer reports a defect (e.g., broken buttons). Request photos first, then once received, direct them to submit a replacement request through Amazon.",
    "body": "Step 1 — Acknowledge and request photos:\n\"Thank you for reaching out and letting us know about the issue with your item. We understand how frustrating this situation must be. Will you please share photos of the product for our review?\"\n\nStep 2 — Once photos are received:\n\"Thank you for sharing the photos. Please initiate a replacement request through your Amazon Orders.\""
  },
  {
    "id": "amazon-6-2",
    "code": "6.2",
    "category": "Defective or damaged products",
    "title": "Return Request — Item Arrived Damaged",
    "whenToUse": "A customer's stated return reason is \"arrived damaged\" and you need more detail before evaluating.",
    "body": "Thank you for submitting your return request. We see the return reason was listed as \"arrived damaged.\" We wanted to see if you had photos or more details on the item when you received it so we can evaluate on our end. We look forward to hearing from you."
  },
  {
    "id": "amazon-6-3",
    "code": "6.3",
    "category": "Defective or damaged products",
    "title": "Defective Product — Washing Caveat",
    "whenToUse": "A customer reports a defect, but the issue may be related to washing/care rather than manufacturing. Ask for more detail before ruling on the claim.",
    "body": "Thank you for reaching out and letting us know about the issue with your item. We understand how frustrating this situation must be.\n\nAccording to our policy, we cannot guarantee coverage for issues caused by washing. However, if you believe this is due to a manufacturing defect or quality issue, we would be happy to review further. Please provide additional details or photos of the item for us to assess the situation."
  },
  {
    "id": "amazon-6-4",
    "code": "6.4",
    "category": "Defective or damaged products",
    "title": "Goodwill Replacement Part (Outside Exchange Window)",
    "whenToUse": "A minor part is broken (e.g., a clip on overalls) and the order is now outside the standard exchange window, but you're offering a free replacement part as goodwill.",
    "body": "Thank you for reaching out. I'm sorry to hear about the broken [part] on your [item]. Since the order was delivered on [date] and is now outside our 30-day exchange window, we are unable to process a full replacement. However, I would be happy to send you a new replacement [part] at no cost so you can continue to use them."
  },
  {
    "id": "amazon-6-5",
    "code": "6.5",
    "category": "Defective or damaged products",
    "title": "Defect Refund — Request Image of the Issue",
    "whenToUse": "A return was initiated citing a defect; request a clear photo before reviewing next steps.",
    "body": "We saw you initiated a return.\nTo help us better understand the issue with [describe defect, e.g., the stitching on the logo], please send us a clear image of the defect. Once we receive the image, we will review it and advise you on the next steps.\nWe appreciate your cooperation and look forward to assisting you further.\nRealtree Store"
  },
  {
    "id": "amazon-7-1",
    "code": "7.1",
    "category": "Sizing & fit feedback",
    "title": "Hat Fit Feedback",
    "whenToUse": "A customer reports a hat did not fit as expected.",
    "body": "Thank you for sharing your feedback regarding the [size] fit of the hat. We're sorry to hear it did not fit as expected.\nOur goal is to provide size details in the description that are as accurate as possible, however it seems they may not have matched your personal measurements. We welcome any insights or feedback on how the chart differed from your experience; it helps us refine our sizing information and assist future customers.\n\nBest Regards,\nRealtree"
  },
  {
    "id": "amazon-7-2",
    "code": "7.2",
    "category": "Sizing & fit feedback",
    "title": "Garment Fit Feedback",
    "whenToUse": "A customer reports a garment did not fit or feel as expected.",
    "body": "Thank you for sharing your feedback regarding the [size] fit of the [item] as well as the fabric feel. We're sorry to hear it did not fit or feel as expected.\nOur goal is to provide size charts that are as accurate as possible as well as comfortable clothing, but it seems they may not have matched your personal measurements. We welcome any insights or feedback on how the chart differed from your experience; it helps us refine our sizing information and assist future customers.\n\nBest Regards,\nRealtree"
  },
  {
    "id": "amazon-7-3",
    "code": "7.3",
    "category": "Sizing & fit feedback",
    "title": "Garment Fit — Unhappy Customer, Waive Restocking Fee",
    "whenToUse": "A customer keeps pushing back about restocking fees related to a fit/fabric issue but is interested in ordering the correct size. Otherwise, standard SOP still applies.",
    "body": "We understand that finding the right fit can be challenging, particularly with different fabrics. However, as our return policy states, we do not offer direct exchanges. To get the correct size, we suggest returning the current item in brand-new condition for a refund and placing a new order for the [smaller] size. As a gesture of goodwill, we will waive the restocking fee for this return. We appreciate your understanding and look forward to helping you find the right fit."
  },
  {
    "id": "amazon-7-4",
    "code": "7.4",
    "category": "Sizing & fit feedback",
    "title": "Incorrect Product/Size Received",
    "whenToUse": "A customer reports receiving the wrong size or product. Request a photo of the item and size tag to verify before resolving.",
    "body": "Thank you for bringing this to our attention. We understand that you received a [wrong size] instead of the [ordered size] you ordered. To help us resolve this quickly, could you please provide a clear photo of the item you received, including the size tag? Your assistance will allow us to verify the issue and ensure a swift resolution.\nWe appreciate your patience and look forward to your reply.\n\nBest Regards,\nRealtree"
  },
  {
    "id": "amazon-7-5",
    "code": "7.5",
    "category": "Sizing & fit feedback",
    "title": "Exchange Request — No Direct Exchanges",
    "whenToUse": "A customer asks for a direct exchange. Our system does not support this — direct them to return and reorder instead.",
    "body": "Thank you for reaching out! Since our system does not currently support direct replacements, please initiate a return for the size [current size/item] and place a new order for the [desired size]."
  },
  {
    "id": "amazon-7-6",
    "code": "7.6",
    "category": "Sizing & fit feedback",
    "title": "Product Style Feedback — Suggest an Alternative Fit",
    "whenToUse": "A customer gives feedback that a garment's fit/style isn't for them; recommend a similar product with a different fit as an alternative.",
    "body": "Thank you for your feedback! This style is designed with a more relaxed fit through the hips and legs to offer extra comfort and mobility. If you prefer a more streamlined look, we recommend trying our [Alternative Product Name] — it has a slimmer fit while still offering great functionality. [Insert product link]"
  },
  {
    "id": "amazon-8-1",
    "code": "8.1",
    "category": "Replacement requests",
    "title": "Replacement Approved by Amazon — Original Item Not Yet Received",
    "whenToUse": "Amazon has approved a replacement, but we have not yet received the original item back, which is required to finalize the replacement.",
    "body": "We noticed that Amazon approved your replacement request for [Product Name/Order ID]. However, we have yet to receive the original item, which is required to finalize the replacement process.\nAs per Amazon's return policy, the original item must be returned to validate the replacement. Please make sure you've sent back the original item."
  },
  {
    "id": "amazon-8-2",
    "code": "8.2",
    "category": "Replacement requests",
    "title": "Replacement/Return Request — Request Photos of Damage",
    "whenToUse": "A replacement or return request has been submitted; request photos of the damage before proceeding.",
    "body": "Thank you for submitting your return/replacement request. If possible, do you mind sharing any photos of the damage that you could share with us? We look forward to hearing from you!\n\nBest Regards,\nRealtree"
  },
  {
    "id": "amazon-8-3",
    "code": "8.3",
    "category": "Replacement requests",
    "title": "Replacement Request — Process via Amazon Orders",
    "whenToUse": "A customer asks for a replacement; direct them to initiate it through their Amazon account since we cannot process replacements manually.",
    "body": "Thank you for reaching out. Will you please share photos of the product for our review?\n\n[Once photos are received:]\nThank you for sharing the photos. Please initiate a replacement request through your Amazon Orders."
  },
  {
    "id": "amazon-9-1",
    "code": "9.1",
    "category": "Refunds & payment status",
    "title": "Refund/Payment Status — Handled by Amazon",
    "whenToUse": "A customer is frustrated about a refund amount or timing, and the payment processing itself is entirely controlled by Amazon.",
    "body": "I'm sorry for the frustration regarding your refund. Because Amazon handles all payments, refunds are automatically sent back to the original payment method used for [Order #].\nPlease contact Amazon Customer Service directly, as they manage the transaction details and may be able to provide further assistance with the payment status."
  },
  {
    "id": "amazon-9-2",
    "code": "9.2",
    "category": "Refunds & payment status",
    "title": "Refund Issued — Confirm Date, Redirect for Verification",
    "whenToUse": "A customer asks to confirm a refund was issued; confirm the date and redirect them to Amazon to verify the transaction.",
    "body": "Thank you for reaching out. We show the refund was issued on [date]. Amazon handles all payment processing and transaction security for Amazon orders, we recommend contacting Amazon Customer Support. They will be able to verify the transaction and ensure your funds are returned to your original payment method.\nWarm Regards,\nRealtree"
  },
  {
    "id": "amazon-9-3",
    "code": "9.3",
    "category": "Refunds & payment status",
    "title": "Need More Information Before Processing a Refund Request",
    "whenToUse": "A refund request is unclear or missing detail. Ask for more information before proceeding.",
    "body": "To help me assist you properly, could you please provide a few more details on the specific reason for your refund request?\nRealtree"
  },
  {
    "id": "amazon-10-1",
    "code": "10.1",
    "category": "Amazon policy & order clarifications",
    "title": "Amazon-Managed Promotion/Registry Discount — Not Seller Controlled",
    "whenToUse": "A customer asks about a promotion or registry credit (e.g., baby registry) that Amazon applies automatically at checkout, which sellers cannot manually issue.",
    "body": "Thank you for your purchase of the [Product Name]!\nRegarding the [promotion/registry] discount, Amazon handles and applies all registry completion discounts automatically at checkout. Because these promotions are managed entirely by Amazon's platform, we as independent sellers cannot manually apply registry discounts or issue the credit on our end.\nPlease reach out directly to Amazon Customer Support. Their team will be able to check your registry settings and help apply the credit to your order.\nRealtree"
  },
  {
    "id": "amazon-10-2",
    "code": "10.2",
    "category": "Amazon policy & order clarifications",
    "title": "Item Never Returned — Tracking Expired (Message 1)",
    "whenToUse": "A return was authorized, but a significant amount of time has passed and the carrier's tracking shows the package was never scanned or received.",
    "body": "Thank you for reaching out to us.\nWe are writing to update you regarding your return request for Order #[Order ID], which was authorized over [#] days ago.\nWe have checked the return tracking details provided by the carrier. Because a significant amount of time has passed, the tracking link has now expired, and the carrier's system shows that the package was never scanned, received, or handed over to them.\n\nPer Amazon policy, seller refunds are processed once the return item is successfully delivered back to our facility. Because we have not received the merchandise, we are currently unable to issue a refund."
  },
  {
    "id": "amazon-10-3",
    "code": "10.3",
    "category": "Amazon policy & order clarifications",
    "title": "Item Never Returned — Request Drop-Off Receipt (Message 2)",
    "whenToUse": "Same scenario as above, but you're asking the customer for proof of drop-off so you can investigate with the carrier.",
    "body": "Thank you for reaching out to us.\nWe are writing to update you regarding your return request for Order #[Order ID], which was authorized over [#] days ago.\nWe have checked the return tracking details provided by the carrier. Because a significant amount of time has passed, the tracking link has now expired, and the carrier's system shows that the package was never scanned, received, or handed over to them.\n\nPer Amazon policy, refunds are processed once the return item is successfully delivered back to the merchant. Please provide a copy of your drop-off receipt from the carrier so we can investigate this further with them and assist you with your refund."
  },
  {
    "id": "amazon-10-4",
    "code": "10.4",
    "category": "Amazon policy & order clarifications",
    "title": "Wrong/Outdated Item Received in Return Package",
    "whenToUse": "The package we received back contains an item from a different (often older) order, not the item associated with the return being processed.",
    "body": "We received the package, but it looks like the item included is from a previous order and does not match the item purchased on this order.\nUnder our return policy, we're only able to issue refunds for items associated with the order being returned. Since we did not receive the item from this order, we're unfortunately unable to process a refund for it.\nWe appreciate your understanding.\nBest Regards,\nRealtree Store"
  },
  {
    "id": "amazon-10-5",
    "code": "10.5",
    "category": "Amazon policy & order clarifications",
    "title": "Return Received Outside Window, Without Authorization",
    "whenToUse": "An item is received back outside Amazon's return window and without an authorized return request, so it doesn't qualify for a refund.",
    "body": "We received the item outside Amazon's return window and without a return authorization request. Because the return was not authorized and is outside the eligible return period, the item does not qualify for a refund under Amazon policy. If you would still like to request a refund, please initiate a return request for the correct order through your Amazon account."
  },
  {
    "id": "amazon-11-1",
    "code": "11.1",
    "category": "Return-to-sender cases",
    "title": "Return to Sender — Order Canceled After Shipping (Buyer Responsible for Shipping)",
    "whenToUse": "A customer canceled an order after it had already shipped, and the carrier returned the refused package to us. Shipping costs are the buyer's responsibility in this case.",
    "body": "We received notification that the package was refused and returned to us by the carrier because the order was canceled after it had already shipped.\n\nWe understand that plans can change. However, once an order has been shipped, the shipping charges have already been incurred and, according to our return policy, are the buyer's responsibility.\n\nAs a result, we will be deducting the shipping fee of $XX.XX from your refund. Thank you for your understanding."
  },
  {
    "id": "amazon-11-2",
    "code": "11.2",
    "category": "Return-to-sender cases",
    "title": "Return to Sender — Customer at Fault (Internal Action)",
    "whenToUse": "Internal guidance: when the return-to-sender is due to customer error, charge the shipping cost when issuing the refund.",
    "body": "Internal action: Charge the customer the shipping cost when issuing the refund."
  },
  {
    "id": "amazon-11-3",
    "code": "11.3",
    "category": "Return-to-sender cases",
    "title": "Return to Sender — Amazon Shipping at Fault",
    "whenToUse": "A package was not delivered and returned to us due to a shipping issue on Amazon's side (not the customer's fault).",
    "body": "To the customer:\n\"We're reaching out regarding your recent order, which was unfortunately not delivered and has been returned due to a shipping issue.\nSince the package was not delivered, please file an A-to-z Guarantee claim through Amazon for this order so that you can request a refund.\nWe apologize for the inconvenience and appreciate your understanding.\"\n\nIf the customer asks for reshipment instead:\n\"Thank you for your reply! When orders are returned to us, they are processed as a return and will need to be reordered. This order is covered by Amazon Claims Protection, allowing the refund to be promptly issued. We apologize for the inconvenience.\"\n\nInternal note: Ask the warehouse to send a photo of the shipping label as evidence in case a claim needs to be filed with Amazon Shipping."
  },
  {
    "id": "amazon-11-4",
    "code": "11.4",
    "category": "Return-to-sender cases",
    "title": "Return to Sender — Customer Disputes Refusal (Confirmed by Carrier)",
    "whenToUse": "A customer says they did not refuse a package, but the carrier/Amazon Shipping investigation confirms the customer refused delivery.",
    "body": "The tracking notification ([Tracking #]) shows the package was refused by the customer and returned to us by the carrier because the order was canceled after it had already shipped.\nWe understand that plans can change. However, once an order has been shipped, the shipping charges have already been incurred and, according to our return policy, are the buyer's responsibility. Once we receive the return, the refund will be processed upon inspection.\nThank you for your understanding.\nRealtree Customer Support"
  },
  {
    "id": "amazon-12-1",
    "code": "12.1",
    "category": "Messages to Amazon Customer Service",
    "title": "Missed Delivery Date — Amazon Buy Shipping Covered",
    "whenToUse": "Amazon CS asks about a missed delivery date on an order shipped on time using Amazon Buy Shipping, which is covered under Amazon's delivery protection.",
    "body": "Hello Amazon Customer Service,\nRegarding Order ID [Order ID], this order was shipped on time using shipping purchased directly through Amazon Buy Shipping services (Tracking: [Tracking #]; Shipped [Date]).\n\nPer Amazon policy, shipments purchased through Amazon Buy Shipping are covered under Amazon's delivery protection.\nBecause the order was dispatched on time via Amazon Buy Shipping, any delivery delay or refund inquiries fall under A-to-z Guarantee coverage."
  },
  {
    "id": "amazon-12-2",
    "code": "12.2",
    "category": "Messages to Amazon Customer Service",
    "title": "Replacement Request on a Delayed Package — Seller-Fulfilled",
    "whenToUse": "Amazon CS asks us to process a replacement on a delayed, seller-fulfilled order. We cannot generate replacements directly — the customer must initiate it themselves.",
    "body": "Hi Amazon Customer Service,\nThank you for contacting us regarding order #[Order ID].\nAs a seller-fulfilled order, we cannot directly process or generate a replacement order on our end. The customer will need to initiate the replacement or refund request directly through their Amazon account (under Your Orders). Alternatively, if the package does not arrive, they may file an A-to-z Guarantee claim for a full refund and place a new order.\nThank you,\nRealtree"
  },
  {
    "id": "amazon-12-3",
    "code": "12.3",
    "category": "Messages to Amazon Customer Service",
    "title": "Return Label Request From Amazon CS — Prepaid Label Program",
    "whenToUse": "Amazon CS asks us to send a return label. Our account is enrolled in Amazon's Prepaid Return Label program, so Amazon issues the label automatically once the customer initiates the return.",
    "body": "Hi Amazon Customer Service,\nPlease let the customer know that they will need to initiate the return through Amazon and select one of the return options available to them. The available return methods are determined by Amazon based on the order and the customer's location.\nOur account is enrolled in the Amazon Prepaid Return Label program, so once the customer initiates the return, Amazon will provide the applicable return instructions and available return options based on the order.\nThank you for your assistance.\nRealtree Customer Service"
  },
  {
    "id": "amazon-12-4",
    "code": "12.4",
    "category": "Messages to Amazon Customer Service",
    "title": "Delivered Package Disputed — Claims & OTDR Protected",
    "whenToUse": "A customer disputes a package marked as delivered, and the shipment is both Claims Protected and OTDR Protected, so Amazon should assist the customer directly.",
    "body": "Thank you for reaching out regarding order #[Order ID] ([Product Name]).\nThis shipping label was purchased through Amazon Buy Shipping using Amazon Shipping (Tracking: [Tracking #]) and is marked as Claims Protected and OTDR Protected.\nTracking details show the package was marked as delivered:\nStatus: Delivered\nDate: [Date]\nLocation: [Location]\nEvent Details: [e.g., Package was left near the front door or porch]\nHowever, the customer reported that they did not receive the package. Because this order was shipped on time using Amazon Buy Shipping and is fully claim-protected, please assist the customer directly.\nThank you for your assistance."
  },
  {
    "id": "amazon-13-1",
    "code": "13.1",
    "category": "Internal A-to-Z guidance",
    "title": "Package Delayed / Still in Transit",
    "whenToUse": "The A-to-Z claim button is inactive while a package is still shown as in transit.",
    "body": "If the customer reports that their package is delayed and tracking shows it is still in transit:\n\n\"We're sorry for the delay with your package. According to the tracking information, your package is still in transit. If it has been more than 7 days, please file an A-to-Z claim for further assistance.\""
  },
  {
    "id": "amazon-13-2",
    "code": "13.2",
    "category": "Internal A-to-Z guidance",
    "title": "Package Lost / Returned to Seller (RTS)",
    "whenToUse": "The package is confirmed lost or was returned to the seller (RTS).",
    "body": "Direct the customer to file an A-to-Z Guarantee claim.\n\nException: Do not direct the customer to file an A-to-Z claim if the issue was caused by the buyer, such as:\n- Providing an incorrect or incomplete address\n- Refusing to accept the package\n- Rejecting delivery\n- Other buyer-related reasons that prevented successful delivery"
  },
  {
    "id": "amazon-13-3",
    "code": "13.3",
    "category": "Internal A-to-Z guidance",
    "title": "Package Still in Transit — Claim Option Not Yet Active",
    "whenToUse": "A claims-protected order is recent, still delayed/in transit, and the A-to-Z Guarantee claim option hasn't activated yet. You may direct the customer to contact Amazon to see if the option can be enabled sooner.",
    "body": "Since this claim-protected scenario occurred recently, the package is still delayed and in transit, and the A-to-Z Guarantee claim option has not been activated yet. We may direct the customer to contact Amazon to see if they can decide whether the A-to-Z option can be made available sooner. This could help reduce the time for handling the delayed or potentially missing package issue.\n\nMessage to customer:\n\"We are so sorry to hear that you haven't received your order yet.\nAccording to the tracking details for order #xxx-xxxxxxx-xxxxxxx (Tracking: xxxxxxx), the package is delayed but still currently in transit.\nSince this shipment was handled through Amazon's shipping network and is past its scheduled delivery date, please reach out directly to Amazon Customer Service via live chat or phone. They can track down the transit delay on their end or issue a refund directly through their delivery guarantee.\nWe sincerely apologize for the delay and appreciate your patience!\""
  },
  {
    "id": "amazon-13-4",
    "code": "13.4",
    "category": "Internal A-to-Z guidance",
    "title": "Return-to-Sender Dispute — Refused Package",
    "whenToUse": "A customer disputes a refused/return-to-sender case that Amazon Shipping has investigated and confirmed. Offer a replacement pathway if appropriate.",
    "body": "To the customer:\n\"The tracking notification ([Tracking #]) shows the package was refused by the customer and returned to us by the carrier because the order was canceled after it had already shipped.\nWe understand that plans can change. However, once an order has been shipped, the shipping charges have already been incurred and, according to our return policy, are the buyer's responsibility. Once we receive the return, the refund will be processed upon inspection.\nThank you for your understanding.\nRealtree Customer Support\"\n\nIf offering a replacement instead:\n\"Please initiate a replacement request through your Amazon account under Your Orders. As soon as that is submitted, we will immediately approve and dispatch a replacement right away while Amazon Shipping continues tracking down the original package.\nThank you for your patience, and we apologize again for the delay.\n\nAmazon's system often routes replacements through that standard return workflow, so you can disregard the return step. Since the original package is lost in transit, you do not need to send anything back.\nWe see the request and will have your replacement processed and shipped out right away. We'll follow up with the new tracking number as soon as it generates.\""
  }
];
