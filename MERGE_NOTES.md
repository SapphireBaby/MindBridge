# MindBridge merge notes — review before upload

Source A: original SapphireBaby/MindBridge backup. Original files are retained unchanged at their original paths.
Source B: Cybersoulja/mindbridge-app_0.02 backup. Application source files are copied at their original paths.

Conflicting files were preserved under docs/updated-app-README.md and docs/updated-app-LICENSE; the original README.md and LICENSE remain unchanged. The source repository and original repository contain different license texts (Apache 2.0 versus MIT); review rights and licensing with the contributors before distributing or publishing the merged code. This ZIP does not resolve those questions.

The four scenario definitions are in src/data/scenarios.js, including The Attendance Conversation.

The package.json and index.html files exist in this merged archive. The source was inspected but the application was NOT built, tested, or deployed. Existing README documentation may describe functionality beyond what the code currently implements.

For GitHub: first preserve your original ZIP separately. On SapphireBaby/MindBridge use Add file > Upload files and upload the CONTENTS of this merged ZIP after extracting it (GitHub does not unpack a ZIP uploaded as one file). Review the changes before committing. Do not replace or delete the existing original files. Prefer a new branch and pull request if available.

Local build check: npm install && npm run build. Cloudflare deployment settings should be checked only after build success.
