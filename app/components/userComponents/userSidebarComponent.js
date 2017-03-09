/**
 * Created by y.masyan on 06.03.2017.
 */

angular.module('app').component('userSidebarComponent', {
  template: `
<div class="sidebar col-sm-2">
    <button class="compose btn btn-danger" ui-sref="common.newContact">
        New contact
    </button>

    <ul class="inbox-sections list-unstyled">
        <li>
            <a href ui-sref="common.contacts" ui-sref-active="active">       
                  All contacts
            </a>
        </li>
 <!--       <li>
                    <a href ui-sref="common.inbox" ui-sref-active="active">       
Inbox
            </a>
            
        </li>
        <li >
                    <a href ui-sref="common.sentMail" ui-sref-active="active">       
            Sent Mail
            </a>

        </li>
-->
        <!--<li >
            <a href ui-sref="common.trashContact" ui-sref-active="active">Trash</a>
        </li>-->
    </ul>
</div>
`,

})
