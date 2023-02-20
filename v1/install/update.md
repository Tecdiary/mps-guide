# Update Guide

## Update Guide

### Please backup your files & database before starting to update.

You can update the MPS settings to auto update (from version 1.0.0). If you have any issue with auto update that might be due to execution time limit. Please open the MPS folder in the command line terminal and run

```bash
php artisan mps:update --c --now
```

## Manual Update Guide

If there are dependencies change or the big update size then we might not release the auto update. You will need to update manually.

Please backup `.env` file and then upload the latest files/folders to replace the old. Lastly you need to run the migration command as following

```bash
# cd /path/to/mps/
# open the mps folder and run the following command
php artisan migrate --force
```

If you have any question or require further information, you should ask support question at [support portal](https://tecdiary.net/support/modern-point-of-sale-solution/ask_question)
