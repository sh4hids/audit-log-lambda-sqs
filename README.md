# audit-log-lambda-sqs

### Clone and prepare kit

```bash
git clone git@github.com:sh4hids/audit-log-lambda-sqs.git
```

```bash
cd audit-log-lambda-sqs
```

```bash
rm -rf .git
```

```bash
git init
```

```bash
cp .env.dev .env
```

### Install dependencies

```bash
npm i
```

### Add git hook

```bash
npm run prepare
```

### Start dev server

```bash
npm run dev
```

### Build project

```bash
npm run build
```

### Start prod server

```bash
npm start
```

# Psuedocode

```

/*
 I am assuming for authentication system is using JWT
 and api requests are authenticated either via
 API Gateway Authorizer or a middleware in the service
*/

/*
 Create Form
*/

method[POST] createForm(formData, userData)
  validationResult = validateFormData(formData)

  if(validationResult.errors)
    return response({
      status: 400,
      errors: validationResult.errors
    })
  else
    formData.createdBy = userData.id;
    savedForm = FormModel.create(formData)

    SQSModel.sendMessage({
      MessageBody: {
        logType: 'CREATE',
        oldValue: null,
        newValue: savedForm,
        createdBy: userData,
      }
    })

    return response({
      status: 201,
      data: savedForm
    })
  end
end

/* 
 Update Form
*/

method[PUT] updateForm(formId, formData, userData)
  existingFormData = FormModel.getById(formId)

  if(!existingFormData)
    return response({
      status: 404,
      error: 'Form does not exist'
    })
  else
    validationResult = validateFormData(formData)

    if(validationResult.errors)
      return response({
        status: 400,
        errors: validationResult.errors
      })
    else
      formData.updatedBy = userData.id
      updatedForm = FormModel.update(formData)

      SQSModel.sendMessage({
      MessageBody: {
        logType: 'UPDATE',
        oldValue: existingFormData,
        newValue: updatedForm,
        createdBy: userData,
      }
    })

      return response({
        status: 200,
        data: updatedForm
      })
    end
  end
end

```
